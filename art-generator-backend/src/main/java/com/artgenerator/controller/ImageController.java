package com.artgenerator.controller;

import com.artgenerator.model.ImageTransformRequest;
import com.artgenerator.model.ImageTransformResponse;
import com.artgenerator.service.ImageTransformService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.annotation.Validated;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/images")
@Validated
@CrossOrigin(origins = "http://localhost:3000")
public class ImageController {

    private static final Logger logger = LoggerFactory.getLogger(ImageController.class);

    @Autowired
    private ImageTransformService imageTransformService;

    @PostMapping("/transform")
    public ResponseEntity<ImageTransformResponse> transformImage(@Valid @RequestBody ImageTransformRequest request) {
        logger.info("Received image transformation request for type: {}", request.getTransformType());
        
        try {
            ImageTransformResponse response = imageTransformService.transformImage(request);
            
            if (response.isSuccess()) {
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.badRequest().body(response);
            }
        } catch (Exception e) {
            logger.error("Error processing image transformation", e);
            return ResponseEntity.internalServerError()
                    .body(new ImageTransformResponse(false, "Internal server error"));
        }
    }

    @PostMapping("/remove-background")
    public ResponseEntity<ImageTransformResponse> removeBackground(@RequestBody String imageData) {
        logger.info("Received background removal request");
        
        try {
            ImageTransformResponse response = imageTransformService.removeBackground(imageData);
            
            if (response.isSuccess()) {
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.badRequest().body(response);
            }
        } catch (Exception e) {
            logger.error("Error removing background", e);
            return ResponseEntity.internalServerError()
                    .body(new ImageTransformResponse(false, "Internal server error"));
        }
    }

    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("Art Generator API is running!");
    }

    @GetMapping("/supported-transformations")
    public ResponseEntity<String[]> getSupportedTransformations() {
        String[] transformations = {
            "photo-to-art",
            "style-transfer", 
            "background-remove",
            "color-enhance",
            "vintage-filter",
            "sketch-maker"
        };
        return ResponseEntity.ok(transformations);
    }
}