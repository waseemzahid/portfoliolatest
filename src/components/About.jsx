import React from 'react'
import aboutImg from '../assets/images/image.png'
const About = () => {
  const info = [
    { text: 'Years experience', count: '02' },
    { text: 'Completed Projects', count: '10' },
    { text: 'Companies Work', count: '02' },
  ]
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center md:mt-8 mt-20">
        <h3 className="text-4xl font-semibold">
          About{' '}
          <span
            className="text-cyan-600"
            style={{ textShadow: '0 0 7px rgba(0, 255, 255, 0.6)' }}
          >
            Me
          </span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <ul className="text-base lg:text-lg list-none text-left">
                <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-cyan-600 before:text-[36px]">
                  Proficient in MERN Stack, React JS, Next JS & Node JS with
                  experience in JavaScript.
                </li>
                <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-cyan-600 before:text-[36px]">
                  Skilled in utilizing Jira for task management, including
                  creating and assigning tasks for efficient project execution.
                </li>
                <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-cyan-600 before:text-[36px]">
                  Experienced in setting up and managing CI/CD workflows,
                  including creating pipelines and leveraging GitHub Actions for
                  automated workflows.
                </li>
                <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-cyan-600 before:text-[36px]">
                  Proficient in utilizing frontend development frameworks such
                  as Tailwind CSS, Material-UI, and Chakra-UI to create visually
                  appealing and responsive web applications.
                </li>
                <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-cyan-600 before:text-[36px]">
                  Expert in frontend animations utilizing Framer Motion library,
                  with additional experience in SVG animations using Lottie
                  Files.
                </li>
                <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-cyan-600 before:text-[36px]">
                  Experienced in implementing authentication using Firebase and
                  validation using Formik, React Hook Form, and Joi-Browser for
                  robust data validation.
                </li>
              </ul>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{' '}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="https://drive.google.com/uc?export=download&id=1V-iREp3jUcT-ATHDppWzqD0oS7uPNxtW" download>
                <button className="btn-primary mt-8 hover:scale-105 transition-transform duration-300 ease-in-out">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-md"  style={{ marginTop: "-20rem" }}>
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
