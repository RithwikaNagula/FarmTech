import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "./../../services/API";
import moment from "moment";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];

  //GET BLOOD GROUP DATA
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //lifrecycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);

  //get function
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {data?.map((record, i) => (
          <div
            className="card m-3 p-2"
            key={i}
            style={{
              width: "20rem",
              backgroundColor: `${colors[i % colors.length]}`,
              color: "#fff",
              borderRadius: "15px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="card-body">
              <h2 className="card-title bg-light text-dark text-center mb-3 rounded-pill py-2">
                {record.bloodGroup}
              </h2>
              <p className="card-text">
                <strong>Total In:</strong> {record.totalIn} ML
              </p>
              <p className="card-text">
                <strong>Total Out:</strong> {record.totalOut} ML
              </p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              <strong>Total Available:</strong> {record.availabeBlood} ML
            </div>
          </div>
        ))}
      </div>
      <div className="container my-4">
        <h1 className="text-center mb-4">Recent Blood Transactions</h1>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donor Email</th>
              <th scope="col">Time & Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} ML</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
