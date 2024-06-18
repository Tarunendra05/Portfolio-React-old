import React from "react";
import Section from "./common/Section";
import contact from "../assets/mobile.png";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

function Contact() {
  const SOCIAL = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/tarunendra-bahadur-singh-5b90a3203/",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://www.instagram.com/tarun_o05/",
      icon: <FaInstagram />,
    },
    {
      id: 3,
      link: "https://www.facebook.com/profile.php?id=100006193604545",
      icon: <FaFacebook />,
    },
  ];

  return (
    <Section
      title="Contact"
      subtitle="These are the ways you can get in touch with me. Hope to hear from you soon."
    >
      <div className=" flex flex-col items-center justify-center gap-8 text-center">
        <div className="flex justify-center items-center px-4">
          <img src={contact} alt="Contact" className="w-32 h-32" />
          <p className="max-w-xs md:max-w-md text-sm md:text-sm lg:text-base font-extralight text-center m-4 dark:text-gray-400">
            I am open to talk regarding freelancing or full-time opportunities.
            Feel free to contact me using your preferred medium.
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-4xl">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopeneer noreferrer"
              className="duration-200 ease-in-out hover:scale-110 hover:text-rose-600"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="p-10 text-left w-full">
          <form
            action="https://getform.io/f/6aea8984-683d-41ac-acb8-d86a3aa76496"
            method="POST"
          >
            <div className="w-auto">
              <div className="flex flex-col">
                <label htmlFor="nameField" className="capitalize text-sm py-2 font-light text-rose-600">
                  name
                </label>
                <input
                  id="nameField"
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label htmlFor="phoneField" className="capitalize text-sm py-2 font-light text-rose-500">
                  phone
                </label>
                <input
                  id="phoneField"
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label htmlFor="emailField" className="capitalize text-sm py-2 font-light text-rose-400">
                  email
                </label>
                <input
                  id="emailField"
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="messageField" className="capitalize text-sm py-2 font-light text-rose-300">
                  Message
                </label>
                <textarea
                  id="messageField"
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
