// CropRecommendationForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CropPrediction() {
  const [formData, setFormData] = useState({
    Nitrogen: '',
    Phosporus: '',
    Potassium: '',
    Temperature: '',
    Humidity: '',
    Ph: '',
    Rainfall: ''
  });

  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setResult(data.recommendation); // Assuming the backend returns { recommendation: "Crop Name" }
      // Navigate to a results page if needed
      // navigate('/crop-result', { state: { result: data.recommendation } });
    } catch (error) {
      console.error('Error fetching crop recommendation:', error);
    }
  };

  return (
    <div className="container my-3 mt-3">
      <h1 className="text-success">Crop Recommendation System <span role="img" aria-label="plant">🌱</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="Nitrogen">Nitrogen</label>
            <input type="number" id="Nitrogen" name="Nitrogen" value={formData.Nitrogen} onChange={handleChange} placeholder="Enter Nitrogen" className="form-control" required />
          </div>
          <div className="col-md-4">
            <label htmlFor="Phosporus">Phosphorus</label>
            <input type="number" id="Phosporus" name="Phosporus" value={formData.Phosporus} onChange={handleChange} placeholder="Enter Phosphorus" className="form-control" required />
          </div>
          <div className="col-md-4">
            <label htmlFor="Potassium">Potassium</label>
            <input type="number" id="Potassium" name="Potassium" value={formData.Potassium} onChange={handleChange} placeholder="Enter Potassium" className="form-control" required />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <label htmlFor="Temperature">Temperature</label>
            <input type="number" step="0.01" id="Temperature" name="Temperature" value={formData.Temperature} onChange={handleChange} placeholder="Enter Temperature in °C" className="form-control" required />
          </div>
          <div className="col-md-4">
            <label htmlFor="Humidity">Humidity</label>
            <input type="number" step="0.01" id="Humidity" name="Humidity" value={formData.Humidity} onChange={handleChange} placeholder="Enter Humidity in %" className="form-control" required />
          </div>
          <div className="col-md-4">
            <label htmlFor="Ph">pH</label>
            <input type="number" step="0.01" id="Ph" name="Ph" value={formData.Ph} onChange={handleChange} placeholder="Enter pH value" className="form-control" required />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <label htmlFor="Rainfall">Rainfall</label>
            <input type="number" step="0.01" id="Rainfall" name="Rainfall" value={formData.Rainfall} onChange={handleChange} placeholder="Enter Rainfall in mm" className="form-control" required />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-primary btn-lg">Get Recommendation</button>
          </div>
        </div>
      </form>

      {result && (
        <div className="card bg-dark" style={{ width: '18rem', margin: '20px auto' }}>
          <img src="/static/img.jpg" className="card-img-top" alt="Crop" />
          <div className="card-body">
            <h5 className="card-title">Recommended Crop for cultivation is:</h5>
            <p className="card-text">{result}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CropPrediction;
