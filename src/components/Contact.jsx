import React, { useState } from "react";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  return (
    <section id="contact" className="py-16 ">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10">
          Contact Us
        </h2>

        <form
          method="POST"
          action={`https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_SECRET}`}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
            value={formDetails.name}
            onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
          <textarea
            name="message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your message"
            value={formDetails.message}
            onChange={inputChange}
            rows="6"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
