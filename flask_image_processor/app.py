from flask import Flask, request, jsonify
from PIL import Image
import io

app = Flask(__name__)

# Endpoint to resize image
@app.route('/resize', methods=['POST'])
def resize_image():
    try:
        # Get image file from the request
        file = request.files['image']
        width = int(request.form['width'])
        height = int(request.form['height'])

        # Open the image
        img = Image.open(file.stream)

        # Resize the image
        img = img.resize((width, height))

        # Save the image to a bytes buffer
        img_byte_arr = io.BytesIO()
        img.save(img_byte_arr, format='PNG')
        img_byte_arr.seek(0)

        return send_file(img_byte_arr, mimetype='image/png', as_attachment=True, download_name='resized_image.png')
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
