import os
from API import get_prediction

# Path to trained model
model_path = r"C:\Users\sp773\Desktop\Phishing-Attack-Domain-Detection\models\Malicious_URL_Prediction.h5"

# Check if model path is valid
if not os.path.exists(model_path):
    print("Model path is incorrect.")
else:
    # Input URL
    url = "www.tesla.com/"

    # Returns probability of URL being malicious
    prediction = get_prediction(url, model_path)
    print(prediction)
