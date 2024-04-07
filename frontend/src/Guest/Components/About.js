import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/Untitled design (1).png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">

          Bid with confidence. Experience the allure of history
        </h1>
        <p className="primary-text">
          Celebrate the elegance of the past and the allure of antiquity at our exclusive online antique auction.
          Explore a curated collection of timeless treasures, each with a story to tell and a legacy to uphold.

        </p>
        <p className="primary-text">
          Bid with confidence and embark on a journey through history as you acquire pieces that will enrich your
          home and captivate your imagination. Join us and become a part of our cherished tradition of preserving
          the beauty and craftsmanship of bygone eras.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
