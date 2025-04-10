import React from "react";
import hero from "../assets/images/hero.png";
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  const social_media = [
    { name: "logo-linkedin", url: "https://www.linkedin.com/in/waseem-zahid-627254119/" },
    { name: "logo-github", url: "https://github.com/waseemzahid/" },
    { name: "logo-instagram", url: "https://www.instagram.com/waseemchaudhary64/" },
    { name: "logo-facebook", url: "https://www.facebook.com/waseem.zahid64/" },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-28 md:flex-row flex-col items-center"
    >
      <div className="flex-1 md:mt-3 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={hero}
                alt=""
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div>
      </div>

      <div className="flex-1">
        <div className="md:text-left text-center">
          <h2 className='text-white md:text-5xl text-3xl font-extrabold md:mt-5 mt-16'>
          <span>I'm a </span>
          <TypeAnimation sequence={[
            'WordPress Full Stack Developer',
            1000,
            'Frontend Developer',
            1000,
            'React Js Developer',
            1000,
            'Next Js Developer',
            1000,
            'MERN Stack Dev',
            1000,
          ]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
          className="text-cyan-600"
          style={{ textShadow: "0 0 8px rgba(0, 255, 255, 0.6)" }}
          />
        </h2>
        <p className='text-white sm:text-lg my-8 md:mx-0 mx-10 md:mr-20 lg:text-xl'>
        I have 3.5+ years of experience in Frontend Development (PSD to HTML, WordPress Theme & Plugin Development) and 1+ year of experience with React JS, Next JS, and the MERN Stack.
        </p>
          <a href="#contact"><button className="btn-primary mt-8 hover:scale-105 transition-transform duration-300 ease-in-out">Contact Me</button></a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <a
                key={icon.name}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-cyan-600 cursor-pointer hover:shadow-lg"
              >
                <ion-icon name={icon.name}></ion-icon>
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
