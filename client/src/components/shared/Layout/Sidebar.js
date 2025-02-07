// import React from "react";
// import { useLocation, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import "../../../styles/Layout.css";

// const Sidebar = () => {
//   //GET USER STATE
//   const { user } = useSelector((state) => state.auth);
//   const location = useLocation();

//   return (
//     <div className="sidebar">
//       <div className="menu">
//         {user?.role === "organisation" && (
//           <>
//             <div
//               className={`menu-item ${location.pathname === "/" && "active"}`}
//             >
//               <i className="fa-solid fa-warehouse"></i>
//               <Link to="/">Inventories</Link>
//             </div>
//             <div
//               className={`menu-item ${
//                 location.pathname === "/donar" && "active"
//               }`}
//             >
//               <i className="fa-solid fa-hand-holding-medical"></i>
//               <Link to="/donar">Donar</Link>
//             </div>
//             <div
//               className={`menu-item ${
//                 location.pathname === "/hospital" && "active"
//               }`}
//             >
//               <i className="fa-solid fa-hospital"></i>
//               <Link to="/hospital">Hospital</Link>
//             </div>
//           </>
//         )}
//         {user?.role === "admin" && (
//           <>
//             <div
//               className={`menu-item ${
//                 location.pathname === "/donar-list" && "active"
//               }`}
//             >
//               <i className="fa-solid fa-warehouse"></i>
//               <Link to="/donar-list">Donar List</Link>
//             </div>
//             <div
//               className={`menu-item ${
//                 location.pathname === "/hospital-list" && "active"
//               }`}
//             >
//               <i className="fa-solid fa-hand-holding-medical"></i>
//               <Link to="/hospital-list">Hospital List</Link>
//             </div>
//             <div
//               className={`menu-item ${
//                 location.pathname === "/org-list" && "active"
//               }`}
//             >
//               <i className="fa-solid fa-hospital"></i>
//               <Link to="/org-list">Organisation List</Link>
//             </div>
//           </>
//         )}
//         {(user?.role === "donar" || user?.role === "hospital") && (
//           <div
//             className={`menu-item ${
//               location.pathname === "/orgnaisation" && "active"
//             }`}
//           >
//             <i className="fa-sharp fa-solid fa-building-ngo"></i>
//             <Link to="/orgnaisation">Organisation</Link>
//           </div>
//         )}
//         {user?.role === "hospital" && (
//           <div
//             className={`menu-item ${
//               location.pathname === "/consumer" && "active"
//             }`}
//           >
//             <i className="fa-sharp fa-solid fa-building-ngo"></i>
//             <Link to="/consumer">Consumer</Link>
//           </div>
//         )}
//         {user?.role === "donar" && (
//           <div
//             className={`menu-item ${
//               location.pathname === "/donation" && "active"
//             }`}
//           >
//             <i className="fa-sharp fa-solid fa-building-ngo"></i>
//             <Link to="/donation">Donation</Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../styles/Layout.css";

const Sidebar = () => {
  //GET USER STATE
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="menu">
        {user?.role === "organisation" && (
          <>
            <div
              className={`menu-item ${location.pathname === "/" && "active"}`}
            >
              <i className="fa-solid fa-warehouse"></i>
              <Link to="/">Inventories</Link>
            </div>
            <div
              className={`menu-item ${
                location.pathname === "/donar" && "active"
              }`}
            >
              <i className="fa-solid fa-hand-holding-medical"></i>
              <Link to="/donar">Donar</Link>
            </div>
            <div
              className={`menu-item ${
                location.pathname === "/hospital" && "active"
              }`}
            >
              <i className="fa-solid fa-hospital"></i>
              <Link to="/hospital">Hospital</Link>
            </div>
          </>
        )}
        {user?.role === "admin" && (
          // Removed the Donar List, Hospital List, and Organisation List
          <>
            {/* Removed items */}
          </>
        )}
        {/* Removed items for donar role */}
        {/* {user?.role === "donar" && (
          <>
            <div
              className={`menu-item ${
                location.pathname === "/orgnaisation" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/orgnaisation">Organisation</Link>
            </div>
            <div
              className={`menu-item ${
                location.pathname === "/donation" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/donation">Donation</Link>
            </div>
          </>
        )} */}
        {user?.role === "hospital" && (
          <div
            className={`menu-item ${
              location.pathname === "/consumer" && "active"
            }`}
          >
            <i className="fa-sharp fa-solid fa-building-ngo"></i>
            <Link to="/consumer">Consumer</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

