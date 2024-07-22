import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600" style={{ textShadow: '0 0 7px rgba(0, 255, 255, 0.6)' }}>Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold text-cyan-500">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6 md:mr-[24rem]">
          I am proficient in building products using modern technologies such as React JS, Next JS, 
          MERN Stack, Web Socket, Web RTC, Firebase, Tailwind CSS, Material-UI, Next Auth, ShadCn 
          and Strapi CMS. My expertise includes managing the development and deployment of front-end 
          and back-end services across multiple cloud platforms. I specialize in architecting solutions 
          for complex business problems involving large-scale real-time and asynchronous applications, 
          leveraging both my logical and theoretical knowledge of the MERN Stack.
          </p>
          <a href="tel:+923006997639"><button className="btn-primary mt-10 hover:scale-105 transition-transform duration-300 ease-in-out">Say Hello</button></a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[26rem] h-80 lg:absolute bottom-0 -right-32 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
