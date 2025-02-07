// import React from "react";
// import Layout from "../../components/shared/Layout/Layout";
// import { useSelector } from "react-redux";
// import "../../styles/AdminHome.css"; 
// const AdminHome = () => {
//   const { user } = useSelector((state) => state.auth);
//   return (
//     <Layout>
//       <div className="admin-home-container container">
//         <div className="admin-welcome d-flex flex-column mt-4">
//           <h1 className="admin-welcome-title">
//             Welcome Admin <i className="text-success">{user?.name}</i>
//           </h1>
//           <h3 className="admin-subtitle">Manage Blood Bank App</h3>
//           <hr />
//           <p className="admin-description">
//             As an administrator, you have full control over the Blood Bank
//             application. Your responsibilities include overseeing blood
//             inventory management, monitoring donation records, and ensuring
//             that all data is accurate and up-to-date.
//           </p>
//           <p className="admin-description">
//             You can manage different roles within the system, such as donors,
//             hospitals, and organizations, ensuring smooth operation and
//             coordination among all participants. Use the tools available in the
//             application to generate reports, track blood donations, and manage
//             requests from hospitals.
//           </p>
//           <p className="admin-description">
//             Your work is crucial in maintaining the integrity of the blood
//             supply chain and ensuring that lifesaving blood is available to
//             those in need. Please use the dashboard features to review
//             inventory levels, add new records, and manage user accounts as
//             necessary.
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminHome;




import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import "../../styles/AdminHome.css";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="admin-home-container container">
        <div className="admin-welcome d-flex flex-column mt-4">
          <h1 className="admin-welcome-title">
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3 className="admin-subtitle">Manage FarmTech Innovations Platform</h3>
          <hr />
          <p className="admin-description">
            As an administrator, you play a vital role in the FarmTech Innovations platform. Your responsibilities include overseeing farm technology management, monitoring user activities, and ensuring the platform's data integrity.
          </p>
          <p className="admin-description">
            You can manage different aspects of the platform, such as farm data, equipment inventories, and user accounts. Utilize the tools available to generate reports, track farm performance, and coordinate with farmers and technology providers.
          </p>
          <p className="admin-description">
            Your work ensures that the technology and resources provided are effectively supporting farmers and enhancing agricultural productivity. Please use the dashboard features to review farm metrics, add new technology records, and manage user interactions as necessary.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
