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
          I am a Full Stack WordPress Developer with hands-on experience in building and maintaining responsive, high-performance websites. My skill set includes WordPress, HTML5, CSS3, JavaScript, React JS, Next JS, Node JS, Express JS, and MongoDB. I specialize in developing custom WordPress themes and plugins, resolving complex functionality issues, and optimizing websites for speed, SEO, and cross-device compatibility. I am also proficient in modern front-end technologies like Tailwind CSS, Material UI, Shad CN, and Redux, as well as real-time tools like Socket.IO and WebRTC. Additionally, I have experience working with Firebase for authentication and data handling, and Stripe for secure payment integrations. I collaborate closely with design teams to transform UI/UX designs into seamless, functional experiences, while managing both front-end and back-end services with scalable, cloud-ready solutions.
          </p>
          <a href="tel:+923006997639"><button className="btn-primary mt-10 hover:scale-105 transition-transform duration-300 ease-in-out">Say Hello</button></a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[26rem] h-80 lg:absolute bottom-[7rem] -right-32 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
