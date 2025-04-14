import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuLinks = [
    { name: "Home", link: "#" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setSticky(scrollY > 0);

      const sections = menuLinks.map((menu) => document.querySelector(menu.link));
      sections.forEach((section, i) => {
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const offsetHeight = section.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(menuLinks[i].link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/95 text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <a href="#">
            <h4 className="text-3xl uppercase font-bold">
              Waseem{" "}
              <span
                className="text-cyan-600"
                style={{ textShadow: "0 0 7px rgba(0, 255, 255, 0.6)" }}
              >
                Zahid
              </span>
            </h4>
          </a>
        </div>

        {/* Desktop Menu */}
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : ""
          } md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                key={i}
                className={`px-6 hover:text-cyan-600 ${
                  activeSection === menu.link ? "text-cyan-600" : ""
                }`}
              >
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-gray-500"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className={`px-6 hover:text-cyan-600 ${
                  activeSection === menu.link ? "text-cyan-600" : ""
                }`}
              >
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
