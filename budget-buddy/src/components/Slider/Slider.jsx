import React from "react";
import "./Slider.css";
import sliders from "../../Info";
import SliderCard from "./SliderCard";

const Slider = () => {
  return (
    <div className="hero_area">
      <section className="slider_section ">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {sliders.map((slider, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <SliderCard
                  title={slider.title}
                  desc={slider.desc}
                  image={slider.image}
                />
              </div>
            ))}
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Slider;

// import React from 'react';
// import sliders from '../../Info';
// import SliderCard from './SliderCard';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to include Bootstrap styles

// const Slider = () => {
//   return (
//     <div>
//       <section className="slider_section">
//         <div id="customCarousel1" className="carousel slide" data-ride="carousel">
//           <div className="carousel-inner">
//             {sliders.map((slider, index) => (
//               <div
//                 key={index}
//                 className={`carousel-item ${index === 0 ? 'active' : ''}`}
//               >
//                 <SliderCard
//                   title={slider.title}
//                   desc={slider.desc}
//                   image={slider.image}
//                 />
//               </div>
//             ))}
//           </div>
//           <ol className="carousel-indicators">
//             {sliders.map((_, index) => (
//               <li
//                 key={index}
//                 data-target="#customCarousel1"
//                 data-slide-to={index}
//                 className={index === 0 ? 'active' : ''}
//               ></li>
//             ))}
//           </ol>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Slider;
