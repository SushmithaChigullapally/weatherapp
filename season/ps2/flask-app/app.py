
from flask import Flask, render_template, request
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import io

# Load the CNN model
model = load_model('models/model.h5')

# Define the class labels
class_labels = ['Cloudy', 'Rainy', 'Sunrise', 'Shine']

# Initialize Flask application
app = Flask(__name__)

# Define route for home page
@app.route('/')
def home():
    return render_template('index.html')

# Define route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    # Get the uploaded image file
    img_file = request.files['image']
    
    # Load and preprocess the image
    img = image.load_img(io.BytesIO(img_file.read()), target_size=(224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = img / 255.0
    
    # Perform prediction
    result = model.predict(img)
    
    # Process the prediction result
    # Map the predicted index to the class label
    predicted_index = np.argmax(result)
    predicted_class = class_labels[predicted_index]
    
    # Render the prediction result on the same page
    return render_template('index.html', prediction=predicted_class)

# Define route for navbar
@app.route('/Navbar')
def Navbar():
    return render_template('Navbar.html')

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
