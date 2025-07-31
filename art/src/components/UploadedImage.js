// src/UploadedImage.js
import React, { useRef, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Pane } from "https://cdn.skypack.dev/tweakpane@4.0.4";
import Picker from "emoji-picker-react";
import { Rnd } from "react-rnd";
import html2canvas from "html2canvas";
import "./UploadedImage.css";

const defaultConfig = {
  brightness: 100,
  contrast: 100,
  saturation: 100,
  blur: 0,
  grayscale: 0,
  invert: 0,
  sepia: 0,
  hue: 0,
  opacity: 100,
  vignette: 0,
};

function UploadedImage() {
  const imgRef = useRef(null);
  const fileInputRef = useRef(null);
  const paneContainerRef = useRef(null);
  const paneRef = useRef(null);
  const canvasRef = useRef(null);
  const location = useLocation();
  const passedImage = location.state?.image?.data_url;

  // Photo config and image source
  const [config, setConfig] = useState({ ...defaultConfig });
  const [imageUrl, setImageUrl] = useState(
    passedImage ||
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
  );

  // Stickers & text arrays
  const [stickers, setStickers] = useState([]);
  const [textItems, setTextItems] = useState([]);
  
  // UI toggles for panels and inputs
  const [showPicker, setShowPicker] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [newText, setNewText] = useState("");
  const [selectedStickerId, setSelectedStickerId] = useState(null);
  const [selectedTextId, setSelectedTextId] = useState(null);

  // Drawing state and history for undo/redo
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawColor, setDrawColor] = useState("#ffffff");
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState("brush"); // "brush" or "eraser"
  const [drawHistory, setDrawHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Layer visibility toggles
  const [showDrawings, setShowDrawings] = useState(true);
  const [showStickers, setShowStickers] = useState(true);
  const [showTextItems, setShowTextItems] = useState(true);

  // Update config helper
  const updateConfig = useCallback((key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }, []);

  // Initialize Tweakpane controls
  useEffect(() => {
    // Create the pane only once on mount.
    paneRef.current = new Pane({
      container: paneContainerRef.current,
      title: "Photo Settings",
      expanded: true,
    });
  
    // Basic Adjustments
    const basics = paneRef.current.addFolder({ title: "Basic Adjustments" });
    ["brightness", "contrast", "saturation", "grayscale", "invert", "sepia"].forEach((key) => {
      basics
        .addBinding(config, key, { min: 0, max: 200, step: 1 })
        .on("change", (ev) => {
          const value = Number(ev.value);
          if (!isNaN(value)) {
            updateConfig(key, value);
          }
        });
    });
  
    // Color & Effects
    const effects = paneRef.current.addFolder({ title: "Color & Effects" });
    ["hue", "opacity", "vignette", "blur"].forEach((key) => {
      effects
        .addBinding(config, key, { min: 0, max: 100, step: 1 })
        .on("change", (ev) => {
          const value = Number(ev.value);
          if (!isNaN(value)) {
            updateConfig(key, value);
          }
        });
    });
  
    // Filters with preset buttons
    const filters = paneRef.current.addFolder({ title: "Filters" });
    filters.addButton({ title: "Vintage Filter" }).on("click", () => {
      setConfig({
        brightness: 110,
        contrast: 90,
        saturation: 120,
        sepia: 40,
        blur: 2,
        grayscale: 10,
        invert: 0,
        hue: 0,
        opacity: 100,
        vignette: 0,
      });
    });
    filters.addButton({ title: "Cool Tone" }).on("click", () => {
      setConfig({
        brightness: 105,
        contrast: 110,
        saturation: 120,
        sepia: 0,
        blur: 0,
        grayscale: 5,
        invert: 0,
        hue: 20,
        opacity: 100,
        vignette: 0,
      });
    });
  
    // Drawing Controls
    const drawing = paneRef.current.addFolder({ title: "Drawing Tools" });
    drawing
      .addBinding({ tool }, "tool", {
        options: {
          Brush: "brush",
          Eraser: "eraser",
        },
        label: "Tool",
      })
      .on("change", (ev) => {
        setTool(ev.value);
      });
    drawing
      .addBinding({ drawColor }, "drawColor", {
        view: "color",
        label: "Color",
      })
      .on("change", (ev) => {
        setDrawColor(ev.value);
      });
    drawing
      .addBinding({ brushSize }, "brushSize", {
        min: 1,
        max: 30,
        step: 1,
        label: "Brush Size",
      })
      .on("change", (ev) => {
        const value = Number(ev.value);
        if (!isNaN(value)) {
          setBrushSize(value);
        }
      });
  
    // Cleanup on unmount.
    return () => {
      paneRef.current.dispose();
    };
    // No dependency array items because we want to initialize the pane only once.
  }, []);
  

  // Drawing logic for canvas with undo/redo history
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const startDrawing = (e) => {
      setIsDrawing(true);
      ctx.beginPath();
      const rect = canvas.getBoundingClientRect();
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    };

    const draw = (e) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      ctx.lineWidth = brushSize;
      if (tool === "eraser") {
        ctx.globalCompositeOperation = "destination-out";
        ctx.strokeStyle = "rgba(0,0,0,1)";
      } else {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = drawColor;
      }
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      ctx.stroke();
    };

    const stopDrawing = () => {
      if (!isDrawing) return;
      setIsDrawing(false);
      ctx.closePath();
      // Save current drawing state
      const dataUrl = canvas.toDataURL();
      const newHistory = drawHistory.slice(0, historyIndex + 1);
      newHistory.push(dataUrl);
      setDrawHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseleave", stopDrawing);
    };
  }, [isDrawing, drawColor, brushSize, tool, drawHistory, historyIndex]);

  // Undo/Redo functions
  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = drawHistory[newIndex];
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      };
    }
  };

  const handleRedo = () => {
    if (historyIndex < drawHistory.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = drawHistory[newIndex];
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      };
    }
  };

  const clearDrawings = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setDrawHistory([]);
      setHistoryIndex(-1);
    }
  };

  // Handle file upload

const handleUpload = useCallback((event) => {
  const file = event.target?.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    const result = reader.result;
    if (typeof result === 'string') {
      setImageUrl(result); // assuming setImageUrl is in scope
    }
  };

  reader.readAsDataURL(file);
}, []);


  // Download final image (with canvas, stickers, text, and photo)
  const handleDownload = useCallback(() => {
    const workspace = document.querySelector(".workspace");
    if (workspace) {
      html2canvas(workspace).then((canvas) => {
        const link = document.createElement("a");
        link.download = "manis.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  }, []);




  function cropImage(image, cropX, cropY, cropWidth, cropHeight) {
    const canvas = document.createElement('canvas');
    canvas.width = cropWidth;
    canvas.height = cropHeight;
    const ctx = canvas.getContext('2d');
  
    ctx.drawImage(
      image,
      cropX, cropY, cropWidth, cropHeight, // Source rectangle
      0, 0, cropWidth, cropHeight          // Destination rectangle
    );
  
    const croppedImg = new Image();
    croppedImg.src = canvas.toDataURL();
    return croppedImg;
  }
  
  // Emoji sticker addition
  const onEmojiClick = useCallback((emojiData) => {
    setStickers((prev) => [
      ...prev,
      { id: Date.now(), emoji: emojiData.emoji, x: 100, y: 100, rotate: 0, flipped: false },
    ]);
    setShowPicker(false);
  }, []);

  // Add text item
  const handleAddText = useCallback(() => {
    if (newText.trim()) {
      setTextItems((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: newText,
          x: 50,
          y: 50,
          fontSize: "24px",
          color: "#ffffff",
          bold: false,
          shadow: true,
        },
      ]);
      setNewText("");
      setShowTextInput(false);
    }
  }, [newText]);

  const imageFilterStyle = {
    filter: `
      brightness(${config.brightness}%)
      contrast(${config.contrast}%)
      saturate(${config.saturation}%)
      blur(${config.blur}px)
      grayscale(${config.grayscale}%)
      invert(${config.invert}%)
      sepia(${config.sepia}%)
      hue-rotate(${config.hue}deg)
      opacity(${config.opacity}%)
    `,
  };

  return (
    <div className="editor-container">
      <nav className="navbar">
        <h1>Photo Editor</h1>
        <div className="controls">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleUpload}
            style={{ display: "none" }}
          />
          <button onClick={() => fileInputRef.current.click()}>Upload</button>
          <button onClick={() => setShowPicker((prev) => !prev)}>Add Sticker</button>
          <button onClick={() => setShowTextInput((prev) => !prev)}>Add Text</button>
          <button onClick={handleDownload}>Download</button>

         

{/* Tool Icon */}
<div className="tool-icon">
  {tool === "brush" ? (
    <i className="fas fa-pencil-alt" title="Brush Mode"></i>
  ) : (
    <i className="fas fa-eraser" title="Eraser Mode"></i>
  )}
</div>

{/* Undo/Redo and Clear */}
<button onClick={handleUndo} title="Undo">
  <i className="fas fa-undo"></i>
</button>
<button onClick={handleRedo} title="Redo">
  <i className="fas fa-redo"></i>
</button>
<button onClick={clearDrawings} title="Clear Drawings">
  <i className="fas fa-trash"></i>
</button>

          {/* Layer toggles */}
          <button onClick={() => setShowDrawings((prev) => !prev)}>
            {showDrawings ? "Hide Drawings" : "Show Drawings"}
          </button>
          <button onClick={() => setShowStickers((prev) => !prev)}>
            {showStickers ? "Hide Stickers" : "Show Stickers"}
          </button>
          <button onClick={() => setShowTextItems((prev) => !prev)}>
            {showTextItems ? "Hide Text" : "Show Text"}
          </button>
        </div>

        {selectedStickerId && (
          <div className="controls">
            <button
              onClick={() =>
                setStickers((prev) =>
                  prev.map((s) =>
                    s.id === selectedStickerId ? { ...s, flipped: !s.flipped } : s
                  )
                )
              }
            >
              Flip
            </button>
            <button
              onClick={() =>
                setStickers((prev) =>
                  prev.map((s) =>
                    s.id === selectedStickerId
                      ? { ...s, rotate: (s.rotate + 15) % 360 }
                      : s
                  )
                )
              }
            >
              Rotate
            </button>
          </div>
        )}
      </nav>

      {showPicker && (
        <div className="emoji-picker">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}

      {showTextInput && (
        <div className="text-input">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Enter text"
          />
          <button onClick={handleAddText}>Add</button>
        </div>
      )}

      {selectedTextId && (
        <div className="text-controls">
          <label>Font Size:</label>
          <input
            type="range"
            min="10"
            max="50"
            onChange={(e) => {
              setTextItems((prev) =>
                prev.map((item) =>
                  item.id === selectedTextId
                    ? { ...item, fontSize: `${e.target.value}px` }
                    : item
                )
              );
            }}
          />
          <label>Color:</label>
          <input
            type="color"
            onChange={(e) => {
              setTextItems((prev) =>
                prev.map((item) =>
                  item.id === selectedTextId
                    ? { ...item, color: e.target.value }
                    : item
                )
              );
            }}
          />
          <label>
            <input
              type="checkbox"
              onChange={(e) =>
                setTextItems((prev) =>
                  prev.map((item) =>
                    item.id === selectedTextId
                      ? { ...item, bold: e.target.checked }
                      : item
                  )
                )
              }
            />{" "}
            Bold
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) =>
                setTextItems((prev) =>
                  prev.map((item) =>
                    item.id === selectedTextId
                      ? { ...item, shadow: e.target.checked }
                      : item
                  )
                )
              }
            />{" "}
            Shadow
          </label>
        </div>
      )}

      <div className="editor-body">
        <div className="sidebar">
          <div ref={paneContainerRef} />
        </div>

        <div className="workspace">
          <img
            ref={imgRef}
            className="editable-image"
            src={imageUrl}
            alt="Editable"
            style={imageFilterStyle}
          />

          {/* Conditionally show the drawing canvas */}
          {showDrawings && (
            <canvas
              ref={canvasRef}
              width={800}
              height={600}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 5,
                backgroundColor: "transparent",
                pointerEvents: "auto",
              }}
            />
          )}

          {/* Render Stickers */}
          {showStickers &&
            stickers.map((sticker) => (
              <Rnd
                key={sticker.id}
                default={{ x: sticker.x, y: sticker.y, width: 80, height: 80 }}
                bounds="parent"
                onClick={() => setSelectedStickerId(sticker.id)}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    transform: `rotate(${sticker.rotate || 0}deg) scaleX(${
                      sticker.flipped ? -1 : 1
                    })`,
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  {sticker.emoji}
                  <button
                    onClick={() =>
                      setStickers((prev) =>
                        prev.filter((s) => s.id !== sticker.id)
                      )
                    }
                    style={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      border: "none",
                      fontSize: "0.7rem",
                      cursor: "pointer",
                    }}
                  >
                    X
                  </button>
                </div>
              </Rnd>
            ))}

          {/* Render Text Items */}
          {showTextItems &&
            textItems.map((text) => (
              <Rnd
                key={text.id}
                default={{ x: text.x, y: text.y, width: 200, height: 60 }}
                bounds="parent"
                onClick={() => setSelectedTextId(text.id)}
              >
                <div
                  style={{
                    fontSize: text.fontSize,
                    color: text.color,
                    fontWeight: text.bold ? "bold" : "normal",
                    textShadow: text.shadow ? "1px 1px 3px black" : "none",
                    position: "relative",
                  }}
                >
                  {text.text}
                  <button
                    onClick={() =>
                      setTextItems((prev) =>
                        prev.filter((t) => t.id !== text.id)
                      )
                    }
                    style={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      border: "none",
                      fontSize: "0.7rem",
                      cursor: "pointer",
                    }}
                  >
                    X
                  </button>
                </div>
              </Rnd>
            ))}
        </div>
      </div>
    </div>
  );
}

export default UploadedImage;
