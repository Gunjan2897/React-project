import React, { Component } from "react";
import banner from "../banner.jpg";
import {Link} from "react-router-dom";
import Bounce from "react-reveal/Bounce";


export default class Home extends Component {
  render() {
    return (
        <Bounce>
      <div className="Container">
        <img src={banner}  className="Img" alt="banner" />
        <div className="Overlay"/>
              <div className="Headding">
          <h1 className="Title">
            DELIVERING HAPPINESS
          </h1>

           <Link to ="/HomeScreen">
            <button className="Btn">Shop Now</button>
          </Link>

              </div>
      </div>
      </Bounce>
    );
  }
}