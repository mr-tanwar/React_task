import React from "react";
import { Avatar } from "@material-ui/core";

export default function Card(props) {
  return (
    <div className="card_container">
      <div className="card ">
        <div className="card-img-container">
          <Avatar />
        </div>

        <h3 className="card-title text-center "> {props.name}</h3>
        <div className="card-body  ">
          <div className="">
            <ul className="list-group">
              <li className="list-group-item">
                <b>ID: </b> {props.id}
              </li>
              <li className="list-group-item">
                <b>Email : </b> {props.email}
              </li>
              <li className="list-group-item">
                <b>Age : </b> {props.age}
              </li>
              <li className="list-group-item">
                <b>Gender : </b> {props.gender}
              </li>
              <li className="list-group-item">
                <b>Phone no. </b> {props.phoneNo}
              </li>
            </ul>
          </div>
          {/* <h5> ID : {props.id} </h5>
          <h5> Email Id: {props.email} </h5>
          <h5> Age : {props.age} </h5>
          <h5> Gender : {props.gender} </h5>
          <h5> Phone no : {props.phoneNo} </h5> */}
        </div>
      </div>
    </div>
  );
}

//name age gender id emailid phone-no
