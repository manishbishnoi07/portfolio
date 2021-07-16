import React from "react";
import "./Contact.css";
import Header from "./Header";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <Header
        title="Contact"
        subHeading="Interested to collaborate? Feel free to drop me an email."
      />
      <div className="contact__formContainer">
        <form onSubmit={handleSubmit}>
          {/* Email Id Input */}
          <input
            type="email"
            placeholder="Your Email ID"
            name="email"
            autoComplete="off"
            className="formInput"
          />
          {/* Subject Input */}
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            autoComplete="off"
            className="formInput"
          />
          {/* Email Body */}
          <textarea
            type="text"
            placeholder="Your Message"
            name="message"
            className="formTextArea"
            rows="9"
          ></textarea>

          {/* Submit button */}
          <button type="submit" className="form__btn">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
