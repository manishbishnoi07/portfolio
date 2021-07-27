import React from "react";
import "./Contact.css";
import Header from "./Header";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <Header
        title="Contact"
        subHeading="Interested to collaborate? Feel free to drop me an email."
      />
      <div className="contact__formContainer">
        <form onSubmit={sendEmail}>
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
