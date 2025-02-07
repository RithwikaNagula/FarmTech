// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import CountUp from "react-countup";
// import { motion } from "framer-motion";
// import image1 from "../images/asset1.jpg";
// import image2 from "../images/asset2.jpg";
// import image4 from "../images/asset5.jpg";
// import image5 from "../images/asset8.jpg";
// import image6 from "../images/asset10.jpeg";

// import "../styles/FrontPage.css";

// const FrontPage = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     fade: true,
//   };

//   const countVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <div>
      
//       <div className="frontpage-container">
//         <motion.div
//           initial={{ opacity: 0.0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
//           className="text-center my-5"
//         >
//           <h1 className="display-4">Blood Donation Saves Lives</h1>
//           <p className="lead">Your donation can make a significant impact on many lives. Join us to help those in need.</p>
//         </motion.div>

//         <div className="carousel-container">
//           <Slider {...settings}>
//             <div><img src={image1} alt="Blood Donation 1" /></div>
//             <div><img src={image2} alt="Blood Donation 2" /></div>
           
//             <div><img src={image4} alt="Blood Donation 4" /></div>
//             <div><img src={image5} alt="Blood Donation 5" /></div>
//             <div><img src={image6} alt="Blood Donation 6" /></div>
//           </Slider>
//         </div>

//         <div className="container mt-5">
//           {/* Heading for Blood, Platelets, Plasma */}
//           <h2 className="text-center mb-4">Understanding the Need for Blood, Platelets, and Plasma</h2>
//           <div className="row mb-5">
//             <div className="col-md-4">
//               <div className="card h-100 info-card">
//                 <img src="https://isavelife.net/images/blood-drop1.jpg" alt="Blood" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">Understanding Blood Donation</h5>
//                   <p className="card-text">
//                     Explore the different types of blood donations and their impact on patients and the healthcare system.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card h-100 info-card">
//                 <img src="https://isavelife.net/images/platelets.png" alt="Platelets" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">Platelets</h5>
//                   <p className="card-text">
//                     Platelets are vital for blood clotting and preventing life-threatening internal bleeding. Your donation helps save lives.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card h-100 info-card">
//                 <img src="https://isavelife.net/images/plasma.png" alt="Plasma" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">Plasma</h5>
//                   <p className="card-text">
//                     Plasma is essential for distributing nutrients and removing waste. Learn about its role in medical treatments.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="circles mt-5">
//             <motion.div
//               className="circle"
//               variants={countVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <div className="counter">
//                 <CountUp start={0} end={150000} duration={30} />
//               </div>
//               <div className="circle-name">Lives Saved</div>
//             </motion.div>
//             <motion.div
//               className="circle"
//               variants={countVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <div className="counter">
//                 <CountUp start={0} end={6000} duration={30} />
//               </div>
//               <div className="circle-name">Donors Registered</div>
//             </motion.div>
//             <motion.div
//               className="circle"
//               variants={countVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <div className="counter">
//                 <CountUp start={0} end={400} duration={30} />
//               </div>
//               <div className="circle-name">Blood Drives</div>
//             </motion.div>
//           </div>

//           {/* Heading for Blogs */}
//           <h2 className="text-center mb-4" style={{ color: 'black', fontSize: '2rem' }}>Latest Blogs</h2>
//           <div className="row mt-5">
//             <div className="col-md-4">
//               <div className="card h-100">
//                 <img src="https://appscms.boffincoders.com/uploads/I_Save_Life_1_34dbb2cbd9.png" alt="Blog Post 1" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ color: 'red', fontSize: '1.25rem' }}>Did You Know Blood Donation Helps Improve Your EyeSight?</h5>
//                   <p className="card-text">
//                     Do you know that donating blood can benefit your eyesight? Learn how blood donation can positively impact your health.
//                   </p>
//                   <p className="card-date">14-Aug-2024</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card h-100">
//                 <img src="https://appscms.boffincoders.com/uploads/I_Save_Life_9165835153.png" alt="Blog Post 2" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ color: 'red', fontSize: '1.25rem' }}>Is Donating Blood Good for Your Health?</h5>
//                   <p className="card-text">
//                     Donating blood is beneficial for your health, reducing the risk of heart disease and stimulating new blood cell production.
//                   </p>
//                   <p className="card-date">01-Aug-2024</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card h-100">
//                 <img src="https://appscms.boffincoders.com/uploads/Plasma_Donation_The_Gift_of_life_Beyond_Red_Blood_Cells_98e7fceeff.png" alt="Blog Post 3" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ color: 'red', fontSize: '1.25rem' }}>Plasma Donation: The Gift of Life Beyond Red Blood Cells</h5>
//                   <p className="card-text">
//                     Your plasma donation offers essential benefits beyond red blood cells. Learn about its life-saving contributions.
//                   </p>
//                   <p className="card-date">18-Apr-2024</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row mt-5">
//             <div className="col-md-4">
//               <div className="card h-100">
//                 <img src="https://appscms.boffincoders.com/uploads/Boosting_Platelets_Availability_in_India_New_Way_to_Collect_and_Store_4c946ba551.png" alt="Blog Post 4" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ color: 'red', fontSize: '1.25rem' }}>Boosting Platelets Availability in India: New Way to Collect and Store</h5>
//                   <p className="card-text">
//                     Innovations in platelet collection and storage are helping boost platelet availability in India. With new methods like apheresis and improved storage systems, more patients can now get the platelets they need.
//                   </p>
//                   <p className="card-date">05-Apr-2024</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card h-100">
//                 <img src="https://appscms.boffincoders.com/uploads/Difference_Between_Blood_Donation_Platelets_and_Plasma_0d636023b8.png" alt="Blog Post 5" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ color: 'red', fontSize: '1.25rem' }}>Difference Between Blood Donation, Platelets, and Plasma Donation</h5>
//                   <p className="card-text">
//                     Want to know the difference between blood donation, platelets, and plasma? Our blog breaks down the essentials in simple terms. Learn how each donation type plays a crucial role in saving lives and how you can make a difference!
//                   </p>
//                   <p className="card-date">27-Mar-2024</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card h-100">
//                 <img src="https://appscms.boffincoders.com/uploads/I_Save_Life_8_ad957b6b67.png" alt="Blog Post 6" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ color: 'red', fontSize: '1.25rem' }}>What Function Do Platelets Play in Inflammation, Bacterial and Viral Infections?</h5>
//                   <p className="card-text">
//                     Platelets play a crucial role in inflammation by releasing molecules that attract immune cells. They also help fight infections by forming clots and trapping pathogens.
//                   </p>
//                   <p className="card-date">15-Mar-2024</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row mt-5">
//             <div className="col-md-4">
//               <div className="card h-100">
//                 <img src="https://appscms.boffincoders.com/uploads/I_Save_Life_6_7f73a8d3c3.png" alt="Blog Post 7" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ color: 'red', fontSize: '1.25rem' }}>Low RBC Count: A Comprehensive Guide to Causes and Remedies</h5>
//                   <p className="card-text">
//                     Explore the causes and remedies for low RBC count in our comprehensive guide. Learn about factors like age, diet, and medical conditions, along with effective treatment options.
//                   </p>
//                   <p className="card-date">08-Mar-2024</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card h-100">
//                 <img src="https://appscms.boffincoders.com/uploads/Everything_You_Need_to_Know_About_Plasma_Donation_4becfdc671.png" alt="Blog Post 8" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ color: 'red', fontSize: '1.25rem' }}>Everything You Need to Know About Plasma Donation</h5>
//                   <p className="card-text">
//                     Plasma donation involves giving a part of your blood containing antibodies and proteins to help patients with immune deficiencies, clotting disorders, and more. It's a safe and rewarding way to contribute to saving lives.
//                   </p>
//                   <p className="card-date">01-Mar-2024</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card h-100">
//                 <img src="https://appscms.boffincoders.com/uploads/I_Save_Life_1111ed32b4.png" alt="Blog Post 9" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ color: 'red', fontSize: '1.25rem' }}>Platelets Disorders in Children: Symptoms, Causes, and Treatment</h5>
//                   <p className="card-text">
//                     Explore the symptoms, causes, and treatment options for platelet disorders in children to understand and manage these conditions effectively.
//                   </p>
//                   <p className="card-date">16-Feb-2024</p>
//                 </div>
//               </div>
//             </div>
//           </div>

        
//         </div>
//       </div>
     
//     </div>
//   );
// };

// export default FrontPage;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import image1 from "../images/asset1.jpg";
import image2 from "../images/asset2.jpeg";
import image4 from "../images/asset5.jpg";
import image5 from "../images/asset4.jpeg";
import image6 from "../images/asset10.jpeg";
import { Link } from 'react-router-dom';

import "../styles/FrontPage.css";

const FrontPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
  };

  const countVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      
      <div className="frontpage-container">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-center my-5"
        >
          <h1 className="display-4">Revolutionize Your Farming with Innovative Solutions</h1>
<p className="lead">Harness the power of technology to optimize your farm's productivity and sustainability. Explore cutting-edge tools and insights tailored for modern farming.</p>

        </motion.div>

        <div className="carousel-container">
          <Slider {...settings}>
            <div><img src={image1} alt="Blood Donation 1" /></div>
            <div><img src={image2} alt="Blood Donation 2" /></div>
            <div><img src={image4} alt="Blood Donation 4" /></div>
            <div><img src={image5} alt="Blood Donation 5" /></div>
            <div><img src={image6} alt="Blood Donation 6" /></div>
          </Slider>
        </div>

        <div className="container mt-5">
          {/* Heading for Crop Recommendation, Disease Prediction, Weather Forecast */}
          <h2 className="text-center mb-4">Explore Our Features</h2>
          {/* <div className="row mb-5">
            <div className="col-md-4">
              <div className="card h-100 info-card" onClick={() => window.location.href = '/crop-recommendation'}>
                <img src="https://example.com/path/to/your/crop-image.jpg" alt="Crop Recommendation" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Crop Recommendation</h5>
                  <p className="card-text">
                    Get personalized crop recommendations based on soil type, climate, and other factors to maximize yield.
                  </p>
                </div>
              </div>
            </div> */}
             
      <div className="row mb-5">
        {/* Crop Prediction Card */}
        <div className="col-md-4">
          <Link to="/crop-prediction" className="card h-100 info-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="https://www.shutterstock.com/image-photo/smart-digital-agriculture-technology-by-600nw-1929162560.jpg" alt="Crop Prediction" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Crop Prediction</h5>
              <p className="card-text">
                Predict the best crops to plant based on your soil type and climate.
              </p>
            </div>
          </Link>
        </div>
            <div className="col-md-4">
              <div className="card h-100 info-card" onClick={() => window.location.href = '/disease-prediction'}>
                <img src="https://cdn.britannica.com/89/126689-004-D622CD2F/Potato-leaf-blight.jpg" alt="Disease Prediction" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Disease Prediction</h5>
                  <p className="card-text">
                    Identify potential diseases in crops early on with our advanced disease prediction tools.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
        <Link to="/weather-forecast" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card h-100 info-card">
            <img src="https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d" alt="Weather Forecast" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Weather Forecast</h5>
              <p className="card-text">
                Stay informed with accurate weather forecasts tailored to your farming needs.
              </p>
            </div>
          </div>
        </Link>
      </div>
          </div>
          <div className="circles mt-5" style={{ display: 'flex', justifyContent: 'space-around' }}>
  <motion.div
    className="circle"
    variants={countVariants}
    initial="hidden"
    animate="visible"
    style={{
      width: '200px', // Increased size
      height: '200px', // Increased size
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '12px solid #4a7c40', // Adjust border width if needed
      backgroundColor: '#ffffff',
      margin: '10px',
      position: 'relative',
    }}
  >
    <div
      className="inner-circle"
      style={{
        width: '180px', // Slightly smaller than outer circle
        height: '180px', // Slightly smaller than outer circle
        borderRadius: '50%',
        backgroundColor: '#4a7c40',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        textAlign: 'center',
        flexDirection: 'column', // Stack elements vertically
      }}
    >
      <div className="counter" style={{ fontSize: '2rem', lineHeight: '1.2' }}> {/* Larger font for numbers */}
        <CountUp start={0} end={50000} duration={30} />
      </div>
      <div className="circle-name" style={{ fontSize: '0.8rem', marginTop: '5px' }}> {/* Smaller font for text */}
        Farmers Benefited
      </div>
    </div>
  </motion.div>

  <motion.div
    className="circle"
    variants={countVariants}
    initial="hidden"
    animate="visible"
    style={{
      width: '200px', // Increased size
      height: '200px', // Increased size
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '12px solid #4a7c40', // Adjust border width if needed
      backgroundColor: '#ffffff',
      margin: '10px',
      position: 'relative',
    }}
  >
    <div
      className="inner-circle"
      style={{
        width: '180px', // Slightly smaller than outer circle
        height: '180px', // Slightly smaller than outer circle
        borderRadius: '50%',
        backgroundColor: '#4a7c40',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        textAlign: 'center',
        flexDirection: 'column', // Stack elements vertically
      }}
    >
      <div className="counter" style={{ fontSize: '2rem', lineHeight: '1.2' }}> {/* Larger font for numbers */}
        <CountUp start={0} end={2000} duration={30} />
      </div>
      <div className="circle-name" style={{ fontSize: '0.8rem', marginTop: '5px' }}> {/* Smaller font for text */}
        New Technologies Implemented
      </div>
    </div>
  </motion.div>

  <motion.div
    className="circle"
    variants={countVariants}
    initial="hidden"
    animate="visible"
    style={{
      width: '200px', // Increased size
      height: '200px', // Increased size
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '12px solid #4a7c40', // Adjust border width if needed
      backgroundColor: '#ffffff',
      margin: '10px',
      position: 'relative',
    }}
  >
    <div
      className="inner-circle"
      style={{
        width: '180px', // Slightly smaller than outer circle
        height: '180px', // Slightly smaller than outer circle
        borderRadius: '50%',
        backgroundColor: '#4a7c40',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        textAlign: 'center',
        flexDirection: 'column', // Stack elements vertically
      }}
    >
      <div className="counter" style={{ fontSize: '2rem', lineHeight: '1.2' }}> {/* Larger font for numbers */}
        <CountUp start={0} end={150} duration={30} />
      </div>
      <div className="circle-name" style={{ fontSize: '0.8rem', marginTop: '5px' }}> {/* Smaller font for text */}
        Farmers Trained
      </div>
    </div>
  </motion.div>
</div>

{/* Heading for Videos */}
<h2 className="text-center mb-4">Latest Agriculture Videos</h2>
<div className="row mt-5">
  <div className="col-md-4">
    <a href="https://youtu.be/c5pekMjAapo?si=eHavIY9xOjPBXzn5" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card h-100">
        <img src="https://img.youtube.com/vi/c5pekMjAapo/hqdefault.jpg" alt="Video 1 Thumbnail" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Understanding Modern Agriculture</h5>
          <p className="card-text">Explore the latest advancements in modern agriculture and how they impact farming practices.</p>
          <p className="card-date">14-Aug-2024</p>
        </div>
      </div>
    </a>
  </div>
  <div className="col-md-4">
    <a href="https://youtu.be/hyrJlE015dA?si=VFEquVolb31ypJx-" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card h-100">
        <img src="https://img.youtube.com/vi/hyrJlE015dA/hqdefault.jpg" alt="Video 2 Thumbnail" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">The Future of Agriculture Welfare</h5>
          <p className="card-text">Discover the future trends in agriculture welfare and the role of technology in improving farming conditions.</p>
          <p className="card-date">01-Aug-2024</p>
        </div>
      </div>
    </a>
  </div>
  <div className="col-md-4">
    <a href="https://youtu.be/NThWNogUpBU?si=JuLxWabpV0b3oAQQ" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card h-100">
        <img src="https://img.youtube.com/vi/NThWNogUpBU/hqdefault.jpg" alt="Video 3 Thumbnail" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Innovations in Agricultural Practices</h5>
          <p className="card-text">Watch how innovations in agricultural practices are transforming the industry and benefiting farmers.</p>
          <p className="card-date">18-Apr-2024</p>
        </div>
      </div>
    </a>
  </div>
</div>

{/* Heading for Government Schemes */}
<h2 className="text-center mb-4" style={{ color: '#2d6a4f', fontSize: '2rem' }}>Government Schemes for Farmers</h2>
<div className="row mt-5">
  <div className="col-md-4">
    <a href="https://www.india.gov.in/topics/agriculture" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <div className="card h-100" style={{ border: '2px solid #4a7c40', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div className="card-body" style={{ backgroundColor: '#f0f8f4' }}>
          <h5 className="card-title" style={{ color: '#2d6a4f', fontSize: '1.25rem', marginBottom: '0' }}>Government Schemes for Agriculture</h5>
          <p className="card-text" style={{ marginBottom: '0' }}>
            Explore various government schemes aimed at supporting and uplifting the agricultural sector in India.
          </p>
          <p className="card-date" style={{ color: '#6c757d' }}>Visit the Portal</p>
        </div>
      </div>
    </a>
  </div>
  <div className="col-md-4">
    <a href="https://agriwelfare.gov.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <div className="card h-100" style={{ border: '2px solid #4a7c40', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div className="card-body" style={{ backgroundColor: '#f0f8f4' }}>
          <h5 className="card-title" style={{ color: '#2d6a4f', fontSize: '1.25rem', marginBottom: '0' }}>Agriculture Welfare Schemes</h5>
          <p className="card-text" style={{ marginBottom: '0' }}>
            Discover welfare schemes that provide financial support and resources to farmers across India.
          </p>
          <p className="card-date" style={{ color: '#6c757d' }}>Visit the Portal</p>
        </div>
      </div>
    </a>
  </div>
  <div className="col-md-4">
    <a href="https://mkisan.gov.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <div className="card h-100" style={{ border: '2px solid #4a7c40', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div className="card-body" style={{ backgroundColor: '#f0f8f4' }}>
          <h5 className="card-title" style={{ color: '#2d6a4f', fontSize: '1.25rem', marginBottom: '0' }}>mKisan Portal</h5>
          <p className="card-text" style={{ marginBottom: '0' }}>
            Access the mKisan portal for real-time information and advisories on farming practices.
          </p>
          <p className="card-date" style={{ color: '#6c757d' }}>Visit the Portal</p>
        </div>
      </div>
    </a>
  </div>
</div>


         {/* Heading for Farmer Helpline Numbers */}
<h2 className="text-center mb-4" style={{ color: '#2d6a4f', fontSize: '2rem' }}>Farmer Helpline Numbers</h2>
<div className="row mt-5">
  <div className="col-md-4">
    <div className="card h-100" style={{ border: '2px solid #4a7c40', borderRadius: '10px', backgroundColor: '#f0f8f4', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#2d6a4f', fontSize: '1.25rem' }}>Kisan Call Center (KCC)</h5>
        <p className="card-text">
          <strong>Toll-Free Number:</strong> 1800-180-1551<br />
          <strong>Purpose:</strong> Provides assistance on various agricultural issues in multiple languages.
        </p>
      </div>
    </div>
  </div>
  
  <div className="col-md-4">
    <div className="card h-100" style={{ border: '2px solid #4a7c40', borderRadius: '10px', backgroundColor: '#f0f8f4', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#2d6a4f', fontSize: '1.25rem' }}>National Agricultural Market (eNAM)</h5>
        <p className="card-text">
          <strong>Toll-Free Number:</strong> 1800-270-0224<br />
          <strong>Purpose:</strong> Support for farmers regarding the electronic trading portal for agricultural commodities.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card h-100" style={{ border: '2px solid #4a7c40', borderRadius: '10px', backgroundColor: '#f0f8f4', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#2d6a4f', fontSize: '1.25rem' }}>PM-Kisan Helpline</h5>
        <p className="card-text">
          <strong>Toll-Free Number:</strong> 155261<br />
          <strong>Purpose:</strong> Assistance related to the Pradhan Mantri Kisan Samman Nidhi (PM-Kisan) scheme.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="row mt-4">
  <div className="col-md-4">
    <div className="card h-100" style={{ border: '2px solid #4a7c40', borderRadius: '10px', backgroundColor: '#f0f8f4', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#2d6a4f', fontSize: '1.25rem' }}>Fertilizer Subsidy Helpdesk</h5>
        <p className="card-text">
          <strong>Helpline Number:</strong> 1800-180-1967<br />
          <strong>Purpose:</strong> Queries related to fertilizer subsidies and related information.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card h-100" style={{ border: '2px solid #4a7c40', borderRadius: '10px', backgroundColor: '#f0f8f4', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#2d6a4f', fontSize: '1.25rem' }}>Crop Insurance Helpline</h5>
        <p className="card-text">
          <strong>Toll-Free Number:</strong> 1800-180-1551<br />
          <strong>Purpose:</strong> Information and assistance regarding crop insurance schemes.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card h-100" style={{ border: '2px solid #4a7c40', borderRadius: '10px', backgroundColor: '#f0f8f4', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#2d6a4f', fontSize: '1.25rem' }}>Agricultural Technology Management Agency (ATMA)</h5>
        <p className="card-text">
          <strong>Toll-Free Number:</strong> 1800-233-0444<br />
          <strong>Purpose:</strong> General agricultural information and support services.
        </p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
     
    </div>
  );
};

export default FrontPage;
