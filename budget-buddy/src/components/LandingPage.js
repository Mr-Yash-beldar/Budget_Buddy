import React from "react";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Feature from "./Feature/Feature";
import About from "./About/About";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";

function LandingPage() {
  return (
    <>
      {/* <!-- start Navbar --> */}
     <Header />
      {/* <!-- end Navbar --> */}
      
      {/* <!-- start slider section --> */}
        <Slider />
      {/* <!-- end slider section --> */}

      {/* <!-- end feature section --> */}
      <Feature />
      {/* <!-- end feature section --> */}

      {/* <!-- about section --> */}
      <About />
      {/* <!-- end about section --> */}

      {/* <!-- team section --> */}
      <Team />
      {/* <!-- end team section --> */}

      {/*<!-- footer section --> */}
      <Footer />
      {/* <!-- end footer section --> */}
      
    </>
  );
}

export default LandingPage;
