import React from "react";
import htmlLogo from '../assets/images/html.png'
import cssLogo from '../assets/images/css.png'
import jsLogo from '../assets/images/javascript.png'
import reactLogo from '../assets/images/react.png'
import nextLogo from '../assets/images/next.png'
import nodeLogo from '../assets/images/node.png'
import tailwindLogo from '../assets/images/tailwind.png'
import expressLogo from '../assets/images/express.png'
import mongoLogo from '../assets/images/mongodb.png'
import materialLogo from '../assets/images/materialui.png'
import shadcnLogo from '../assets/images/shadcn.png'
import reduxLogo from '../assets/images/redux.png'
import socketLogo from '../assets/images/socket.png'
import webrtcLogo from '../assets/images/webrtc.png'
import wordpressLogo from '../assets/images/wordpress.png'
import stripeLogo from '../assets/images/stripe.png'
import firebaseLogo from '../assets/images/firebase.png'

const Skills = () => {
  const skills = [
    {
      logo: htmlLogo,
      name: "HTML5",
    },
    {
      logo: cssLogo,
      name: "CSS3",
    },
    {
      logo: jsLogo,
      name: "Javascript",
    },
    {
      logo: reactLogo,
      name: "React Js",
    },
    {
      logo: nextLogo,
      name: "Next Js",
    },
    {
      logo: nodeLogo,
      name: "Node Js",
    },
    {
      logo: expressLogo,
      name: "Express Js",
    },
    {
      logo: mongoLogo,
      name: "Mongo DB",
    },
    {
      logo: tailwindLogo,
      name: "Tailwind CSS",
    },
    {
      logo: materialLogo,
      name: "Material UI",
    },
    {
      logo: shadcnLogo,
      name: "Shad CN",
    },
    {
      logo: reduxLogo,
      name: "Redux",
    },
    {
      logo: socketLogo,
      name: "Socket IO",
    },
    {
      logo: webrtcLogo,
      name: "Web RTC",
    },
    {
      logo: firebaseLogo,
      name: "Firebase",
    },
    {
      logo: stripeLogo,
      name: "Stripe",
    },
    {
      logo: wordpressLogo,
      name: "Wordpress",
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center mx-7">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600" style={{ textShadow: '0 0 7px rgba(0, 255, 255, 0.6)' }}>Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="cursor-pointer hover:text-cyan-500"
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-full">
                <div><img src={skill.logo} alt="" /></div>
              </div>
              <p className="text-xl mt-3 ">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
