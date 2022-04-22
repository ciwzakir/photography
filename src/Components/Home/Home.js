import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "./Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Banner></Banner>
    
      <Footer></Footer>
    </div>
  );
};

export default Home;
