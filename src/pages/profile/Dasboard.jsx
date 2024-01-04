import React, { useEffect, useState } from "react";
import AxiosClient from "../../api/AxiosClient";
import "./dashboard.scss";

const Dashboard = () => {
  const [getData, setData] = useState([]);
  let userData = localStorage.getItem("userData");
  if (userData) {
    userData = JSON.parse(userData);
  }

  useEffect(() => {
    AxiosClient.post(`/api/v1/showviewsupervisor?iduser=${userData.id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, [userData.id]);

  const formatLoginDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Lấy phần ngày sau đóng cột T
  };

  const renderTopicData = (user) => {
    if (user && user.log && user.log.length > 0 && user.score && user.score.length > 0) {
      let renderedUserData = false;

      return user.score.map((score) => (
        <tr key={score.idscore}>
          {renderedUserData ? (
            <>
              <td></td>
              <td></td>
            </>
          ) : (
            <>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </>
          )}
          <td>{formatLoginDate(user.log[0].daylogin)}</td>
          <td>{user.log[0].hourslogn}</td>
          <td>{score.yourtopic}</td>
          <td>{score.scoreexam}</td>
          {renderedUserData = true}
        </tr>
      ));
    }
    return null;
  };

  return (
    <div className="dashboard">
      <div className="container-dashboard">
        <h2 className="text-center">User Information</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Last Login Date</th>
              <th>Last Login Duration</th>
              <th>Topic</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((user) => renderTopicData(user))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
