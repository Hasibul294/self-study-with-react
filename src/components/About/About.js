import React from "react";
import img from "../../images/about.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const About = () => {
  return (
    <div>
      <Header></Header>
      <div className="bg-gray-200 py-20">
        <h1 className="text-5xl font-bold mb-12">About US</h1>
        <div className="flex justify-center items-center px-16">
          <img src={img} alt="" />
          <div>
            <h1 className="text-3xl font-semibold ">About Self Study</h1>
            <p className="m-8 text-justify">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text amr songr balga ami toami valo lasi
              ciri din akr dali
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
