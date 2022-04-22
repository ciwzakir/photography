import React from "react";
import "./About.css";
import profile from "../../Images/Banner/banner-3.jpg";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const About = () => {
  return (
    <div className="container about-me">
          <PageTitle title="About-"></PageTitle>
      <div className="row">
        <div className="col-md-7 col-sm-12">
          <h1 className="text-black">Welcome to <br /> Antora Photography</h1>
          <h2 className="text-black goal-heading">
            My Goal as a professional  <span className="text-primary">Photographer</span>
          </h2>
          <p className="mt-3 ">
            Hi, I am Zakir Hossen. I am a professional photographer. And I have
            studio named Antora Photography.I am here to provide you best
            photography service.If you want to hire a professional
            <span className="text-primary"> Photographer</span> then you are on the
            right place. You will get word class service. Our service,
            management, experience are absolutely praiseworthy as well as our
            service charge is also reasonable. You are most welcome to my studio and feel free contact anytime.
          </p>
          <button className="btn btn-primary">Get me Hired</button>
        </div>
        <div className="col-md-5 col-sm-12 profile-picture">
          <img className="img-fluid p-4" src={profile} alt="profile img" />
        </div>
      </div>
    </div>
  );
};

export default About;
