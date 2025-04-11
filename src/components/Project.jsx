import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import project8 from "../assets/images/WordPress1.png";
import project9 from "../assets/images/WordPress2.png";
import project10 from "../assets/images/WordPress3.png";
import project11 from "../assets/images/WordPress4.png";
import project12 from "../assets/images/WordPress5.png";
import project13 from "../assets/images/WordPress6.png";
import project14 from "../assets/images/WordPress7.png";
import project15 from "../assets/images/WordPress8.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const [activeTab, setActiveTab] = useState("wordpress");

  const wordpressProjects = [
    {
      img: project8,
      name: "Personal Drivers",
      live_link: "https://www.personaldrivers.com/",
    },
    {
      img: project9,
      name: "Mtech Motor Cycles",
      live_link: "https://www.mtechmotorcycles.com/",
    },
  ];

  const reactProjects = [
    {
      img: project4,
      name: "MERN CHAT APP with Socket.io",
      github_link: "https://github.com/waseemzahid/Mern-Chat-App",
      live_link: "https://mern-chat-app-189n.onrender.com/",
    },
    {
      img: project3,
      name: "MERN Medicare Booking App with Stripe Payment",
      github_link: "https://github.com/waseemzahid/MedicareBooking",
      live_link: "https://medicare-booking-frontend.vercel.app/",
    },
    {
      img: project2,
      name: "E-Commerce Next JS APP With Stripe Payment",
      github_link: "https://github.com/waseemzahid/amazonpro",
      live_link: "https://amazonpro-chi.vercel.app/",
    },
    {
      img: project7,
      name: "NEXT Js Home Interior Design Website",
      github_link: "https://github.com/waseemzahid/Home-Interior",
      live_link: "https://home-interior-three.vercel.app/",
    },
    {
      img: project5,
      name: "React Js Educational Website",
      github_link: "https://github.com/waseemzahid/edusity",
      live_link: "https://edusity-nu.vercel.app/",
    },
    {
      img: project6,
      name: "Netflix Clone With Firebase Authentication",
      github_link: "https://github.com/waseemzahid/Netflix-Clone",
      live_link: "https://netflix-clone-psi-three-66.vercel.app/",
    },
    {
      img: project1,
      name: "Virtual Reality Frontend APP",
      github_link: "https://github.com/waseemzahid/virtualreality",
      live_link: "https://virtualreality-nine.vercel.app/",
    },
  ];

  const projectsToShow = activeTab === "wordpress" ? wordpressProjects : reactProjects;

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600" style={{ textShadow: '0 0 7px rgba(0, 255, 255, 0.6)' }}>Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <div className="flex justify-center my-8 gap-4">
        <button
          onClick={() => setActiveTab("wordpress")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "wordpress" ? "btn-primary hover:scale-105 transition-transform duration-300 ease-in-out" : "bg-gray-700 text-gray-300"
          }`}
        >
          WordPress
        </button>
        <button
          onClick={() => setActiveTab("react")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "react" ? "btn-primary hover:scale-105 transition-transform duration-300 ease-in-out" : "bg-gray-700 text-gray-300"
          }`}
        >
          React JS / MERN
        </button>
      </div>
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="pb-14 custom-swiper-pagination"
          >
            {projectsToShow.map((project_info, i) => (
              <SwiperSlide key={i}>
                <a href={project_info.live_link} target="_blank" rel="noopener noreferrer">
                  <div className="w-full h-full p-4 bg-slate-700/90 rounded-xl backdrop-blur-md">
                    <img src={project_info.img} alt="" className="rounded-lg h-44 w-full" />
                    <h3 className="text-xl my-4 text-cyan-500 font-semibold">{project_info.name}</h3>
                    <div className="flex gap-3">
                    {project_info.github_link && (
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Github
                      </a>
                    )}
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden -mt-12">
          <img src={project_person} alt="project person" />
        </div>
      </div>
    </section>
  );
};

export default Project;
