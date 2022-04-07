import React from "react";
import Name from "../images/mic4.jpg"
import TOJ from "../images/TOJ.jpeg"
import Download from "../images/download.jpeg"

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="line"></div>

      <div className="a-heading">
        <h1>About Us</h1>
        <p>Sit and relax as you read interesting and weird things about us</p>
      </div>

      <div id="about" class="container">
        <div class="card">
          <div class="imgbox">
            <img src={Name} alt="" />
          </div>
          <div class="content">
            <h3 id="angular">OUR MINISTRY</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore labore, quaerat cum voluptatibus aliquid?
            </p>
            <a href="#">Readmore</a>
          </div>
        </div>

        <div class="card">
          <div class="imgbox">
          <img src={TOJ} alt="" />
          </div>
          <div class="content">
            <h3 id="react">OURSELVES</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore labore, quaerat cum voluptatibus aliquid?
            </p>
            <a href="#">Readmore</a>
          </div>
        </div>

        <div class="card">
          <div class="imgbox">
          <img src={Download} alt="" />
          </div>
          <div class="content">
            <h3 id="vuejs">OTHER THINGS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore labore, quaerat cum voluptatibus aliquid?
            </p>
            <a href="#">Readmore</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
