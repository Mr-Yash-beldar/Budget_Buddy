import React from "react";
import "./Slider.css"


const SliderCard = ({title,desc,image}) => {
    
  return (
    <div className="slider_section  hero-img">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 ">
            <div className="detail-box">
              <h1>{title}</h1>
              <p>
                {desc}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>

  );
};

export default SliderCard;
