import React, { Component } from "react";
import data from "../data.js";
import "../style/dashboard.css";
import Card from "./Card";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const userData = data.user;
    return (
      <div className="dashboard_container ">
        <h2 className="text-center">Employees</h2>

        <div className="">
          {userData.map((userInfo) => (
            <Card
              key={userInfo.id}
              name={userInfo.name}
              id={userInfo.id}
              age={userInfo.age}
              gender={userInfo.gender}
              email={userInfo.email}
              phoneNo={userInfo.phoneNo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
