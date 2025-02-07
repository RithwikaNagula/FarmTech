# from flask import Flask,request,render_template
# import numpy as np
# import pandas
# import sklearn
# import pickle

# # importing model
# model = pickle.load(open('model.pkl','rb'))
# sc = pickle.load(open('standscaler.pkl','rb'))
# ms = pickle.load(open('minmaxscaler.pkl','rb'))

# # creating flask app
# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template("index.html")

# @app.route("/predict",methods=['POST'])
# def predict():
#     N = request.form['Nitrogen']
#     P = request.form['Phosporus']
#     K = request.form['Potassium']
#     temp = request.form['Temperature']
#     humidity = request.form['Humidity']
#     ph = request.form['Ph']
#     rainfall = request.form['Rainfall']

#     feature_list = [N, P, K, temp, humidity, ph, rainfall]
#     single_pred = np.array(feature_list).reshape(1, -1)

#     scaled_features = ms.transform(single_pred)
#     final_features = sc.transform(scaled_features)
#     prediction = model.predict(final_features)

#     crop_dict = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
#                  8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
#                  14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
#                  19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}

#     if prediction[0] in crop_dict:
#         crop = crop_dict[prediction[0]]
#         result = "{} is the best crop to be cultivated right there".format(crop)
#     else:
#         result = "Sorry, we could not determine the best crop to be cultivated with the provided data."
#     return render_template('index.html',result = result)




# # python main
# if __name__ == "__main__":
#     app.run(debug=True)


from flask import Flask, request, jsonify
import numpy as np
import pickle
from flask_cors import CORS  # Import CORS

# Load models and scalers
model = pickle.load(open('model.pkl', 'rb'))
sc = pickle.load(open('standscaler.pkl', 'rb'))
ms = pickle.load(open('minmaxscaler.pkl', 'rb'))

# Create Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def index():
    return "Welcome to the Crop Prediction API!"  # Changed to a simple welcome message

@app.route("/predict", methods=['POST'])
def predict():
    try:
        # Parse JSON data from request
        data = request.json
        N = data.get('Nitrogen')
        P = data.get('Phosporus')
        K = data.get('Potassium')
        temp = data.get('Temperature')
        humidity = data.get('Humidity')
        ph = data.get('Ph')
        rainfall = data.get('Rainfall')

        feature_list = [N, P, K, temp, humidity, ph, rainfall]
        single_pred = np.array(feature_list).reshape(1, -1)

        # Scale and predict
        scaled_features = ms.transform(single_pred)
        final_features = sc.transform(scaled_features)
        prediction = model.predict(final_features)

        # Crop dictionary
        crop_dict = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
                     8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
                     14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
                     19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}

        # Determine the crop
        crop = crop_dict.get(int(prediction[0]), "Unknown")
        result = f"{crop} is the best crop to be cultivated with the provided data."

        return jsonify({"recommendation": result})

    except Exception as e:
        return jsonify({"error": str(e)})

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
