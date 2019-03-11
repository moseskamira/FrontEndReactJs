import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Login from "./Login";
import "../css/main.css";
import default_image from "../images/foodwelcome.jpg";
import food from "../images/food.jpg";
import { NavLink } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <section>
          <div id="textOverlay">
            <div>
              <h2>
                {" "}
                <strong>
                  <center>FAST FOOD FAST </center>
                </strong>
              </h2>
            </div>
            <div>
              <Login />
            </div>
            <hr />
            <div className="co mt-3 p-5">
              <div className="co-1">
                {" "}

                  <img src={default_image} alt="image" id="image1"/>
              </div>
              <div className="co-2 mt-2 image2">
                {" "}

                  <img src={food} alt="image" id="image2"/>
              </div>
              <div className="co-3" id="reg">
            <NavLink to="/signup">
                  {" "}

                    {" "}
                    Register

            </NavLink>
          </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
