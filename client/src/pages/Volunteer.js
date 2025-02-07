// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../styles/VolunteerForm.css'; 

// const VolunteerForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [emailSent, setEmailSent] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8000/api/v1/payment/sendemail', {
//         email: formData.email,
//       });

//       setSubmitted(true);
//       setEmailSent(true);
//       setFormData({ name: '', email: '', phone: '', message: '' });
//       toast.success('Thank you for your interest in volunteering! We will be in touch soon.');
//     } catch (error) {
//       console.error('Error submitting form or sending email:', error);
//       toast.error('There was an error processing your request. Please try again.');
//     }
//   };

//   return (
//     <div className="volunteer-form-container">
//       <h2 className="form-heading">Volunteer for Blood Donation Drives</h2>
//       <form onSubmit={handleSubmit} className="volunteer-form">
//         <div className="form-group">
//           <label htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone Number</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//         {submitted && <p className="success-message">Thank you for your interest! We will be in touch soon.</p>}
//         {emailSent && <p className="email-message">A confirmation email has been sent to {formData.email}.</p>}
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default VolunteerForm;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../styles/VolunteerForm.css';

// const VolunteerForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   });
//   const [supplies, setSupplies] = useState([{ supply: '', quantity: '', price: '' }]);
//   const [submitted, setSubmitted] = useState(false);
//   const [emailSent, setEmailSent] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSupplyChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedSupplies = supplies.map((supply, i) =>
//       i === index ? { ...supply, [name]: value } : supply
//     );
//     setSupplies(updatedSupplies);
//   };

//   const addSupplyRow = () => {
//     setSupplies([...supplies, { supply: '', quantity: '', price: '' }]);
//   };

//   const removeSupplyRow = (index) => {
//     const updatedSupplies = supplies.filter((_, i) => i !== index);
//     setSupplies(updatedSupplies);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const emailData = {
//       ...formData,
//       supplies,
//     };

//     try {
//       await axios.post('http://localhost:8000/api/v1/payment/sendemail', emailData);

//       setSubmitted(true);
//       setEmailSent(true);
//       setFormData({ name: '', email: '', phone: '' });
//       setSupplies([{ supply: '', quantity: '', price: '' }]);
//       toast.success('Your supply details have been sent to the farmers successfully.');
//     } catch (error) {
//       console.error('Error submitting form or sending email:', error);
//       toast.error('There was an error processing your request. Please try again.');
//     }
//   };

//   return (
//     <div className="volunteer-form-container">
//       <h2 className="form-heading">Farmer Details</h2>
//       <form onSubmit={handleSubmit} className="volunteer-form">
//         <div className="form-group">
//           <label htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone Number</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <h3 className="form-heading">Supply Information</h3>
//         {supplies.map((supply, index) => (
//           <div key={index} className="form-group">
//             <label htmlFor={`supply-${index}`}>Supply Item</label>
//             <input
//               type="text"
//               id={`supply-${index}`}
//               name="supply"
//               value={supply.supply}
//               onChange={(e) => handleSupplyChange(index, e)}
//               placeholder="Supply Item"
//               required
//             />
//             <label htmlFor={`quantity-${index}`}>Quantity</label>
//             <input
//               type="number"
//               id={`quantity-${index}`}
//               name="quantity"
//               value={supply.quantity}
//               onChange={(e) => handleSupplyChange(index, e)}
//               placeholder="Quantity"
//               required
//             />
//             <label htmlFor={`price-${index}`}>Price</label>
//             <input
//               type="number"
//               id={`price-${index}`}
//               name="price"
//               value={supply.price}
//               onChange={(e) => handleSupplyChange(index, e)}
//               placeholder="Price"
//               required
//             />
//             {supplies.length > 1 && (
//               <button type="button" onClick={() => removeSupplyRow(index)}>
//                 Remove
//               </button>
//             )}
//           </div>
//         ))}
//         <button type="button" onClick={addSupplyRow}>
//           Add Another Supply
//         </button>

//         <button type="submit" className="submit-button">Submit</button>
//         {submitted && <p className="success-message">Thank you for your interest! We will be in touch soon.</p>}
//         {emailSent && <p className="email-message">A confirmation email has been sent to {formData.email}.</p>}
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default VolunteerForm;


import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/VolunteerForm.css';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [supplies, setSupplies] = useState([{ supply: '', quantity: '', price: '' }]);
  const [submitted, setSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSupplyChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSupplies = supplies.map((supply, i) =>
      i === index ? { ...supply, [name]: value } : supply
    );
    setSupplies(updatedSupplies);
  };

  const addSupplyRow = () => {
    setSupplies([...supplies, { supply: '', quantity: '', price: '' }]);
  };

  const removeSupplyRow = (index) => {
    const updatedSupplies = supplies.filter((_, i) => i !== index);
    setSupplies(updatedSupplies);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailData = {
      email: formData.email,
      supplies,
    };

    try {
      await axios.post('http://localhost:8000/api/v1/payment/sendemail', emailData);

      setSubmitted(true);
      setEmailSent(true);
      setFormData({ name: '', email: '', phone: '' });
      setSupplies([{ supply: '', quantity: '', price: '' }]);
      toast.success('Your supply details have been sent successfully.');
    } catch (error) {
      console.error('Error submitting form or sending email:', error);
      toast.error('There was an error processing your request. Please try again.');
    }
  };

  return (
    <div className="volunteer-form-container">
      <h2 className="form-heading">Farmer Details</h2>
      <form onSubmit={handleSubmit} className="volunteer-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <h3 className="form-heading">Supply Information</h3>
        {supplies.map((supply, index) => (
          <div key={index} className="form-group">
            <label htmlFor={`supply-${index}`}>Supply Item</label>
            <input
              type="text"
              id={`supply-${index}`}
              name="supply"
              value={supply.supply}
              onChange={(e) => handleSupplyChange(index, e)}
              placeholder="Supply Item"
              required
            />
            <input
              type="number"
              name="quantity"
              value={supply.quantity}
              onChange={(e) => handleSupplyChange(index, e)}
              placeholder="Quantity"
              required
            />
            <input
              type="number"
              name="price"
              value={supply.price}
              onChange={(e) => handleSupplyChange(index, e)}
              placeholder="Price"
              required
            />
            <button type="button" onClick={() => removeSupplyRow(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addSupplyRow}>Add Another Supply</button>

        <button type="submit" className="submit-button">Submit</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default VolunteerForm;
