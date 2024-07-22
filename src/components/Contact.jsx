import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "waseemzahid64@gmail.com", link: "mailto:waseemzahid64@gmail.com" },
    { logo: "logo-whatsapp", text: "+92 300 699 7639", link: "https://wa.me/923006997639" },
    {
      logo: "location",
      text: "Neelam Block Iqbal Town Lahore",
      link: "https://maps.app.goo.gl/ZadNYPNJ8QDp9Rpp8"
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600" style={{ textShadow: '0 0 7px rgba(0, 255, 255, 0.6)' }}>Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form action='https://getform.io/f/qaloexkb' method="post" className="flex flex-col flex-1 gap-5">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            style={{
              border: '1px solid #06B6D4',
              outline: 'none',
              transition: 'all 300ms ease-in-out',
            }}
            onFocus={(e) => { 
              e.target.style.boxShadow = '0 0 12px rgba(0, 255, 255, 0.6)'; 
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = 'none';
            }}
          />

            <input type="Email" 
            placeholder="Your Email Address"
            name="email" 
            style={{
              border: '1px solid #06B6D4',
              outline: 'none',
              transition: 'all 300ms ease-in-out',
            }}
            onFocus={(e) => { 
              e.target.style.boxShadow = '0 0 12px rgba(0, 255, 255, 0.6)'; 
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = 'none';
            }}
            />
            <textarea 
            placeholder="Your Message" 
            rows={6}
            name="message"
            style={{
              border: '1px solid #06B6D4',
              outline: 'none',
              transition: 'all 300ms ease-in-out',
            }}
            onFocus={(e) => { 
              e.target.style.boxShadow = '0 0 12px rgba(0, 255, 255, 0.6)'; 
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = 'none';
            }}
            ></textarea>
            <button type="submit" className="btn-primary w-fit hover:scale-105 transition-transform duration-300 ease-in-out">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
