import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Discover the excitement of bidding on unique antique items at our online auction platform. Join now and explore a world of vintage treasures!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="Auction" />
        <p>
          I've been using this online auction platform for months now, and I'm constantly amazed by the variety and quality of antique items available. It's a collector's dream come true!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Antique Enthusiast</h2>
      </div>
    </div>
  );
};

export default Testimonial;
