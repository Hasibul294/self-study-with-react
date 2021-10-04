import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-green-200 py-10 mt-8 font-serif flex justify-center items-center">
        <div className="mx-10">
          <h1 className="text-5xl">Self Study </h1>
          <p>
            There are many variations of passg of Lorem Ipsum available, but
            thmajority have suffered altem,
          </p>
          <p className="text-3xl">
            <i className="fab fa-facebook mr-2"></i>
            <i className="fab fa-twitter-square mr-2"></i>
            <i className="fab fa-google-plus mr-2"></i>
            <i className="fab fa-instagram-square mr-2"></i>
          </p>
        </div>
        <div className="mx-10">
          <h1 className="text-5xl">Get in touch</h1>
          <p>
            <i class="fas fa-phone-alt"></i> +88 018 785 4589
          </p>
          <p>
            <i class="fas fa-envelope"></i> hasibulhasan@email.com
          </p>
          <p>
            <i class="fas fa-globe-asia"></i> www.selfstudy.com
          </p>
        </div>
      </div>
      <div className="bg-gray-900 py-8 text-white">
        <h1>
          Copyright <i class="fas fa-copyright"></i> Study 2017.All right
          reserved.Privacy Policy, Terms and Conditions.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
