import React from "react";
import { useState } from "react";
import { MdMessage } from "react-icons/md";
import "./Contactform.css";
import Button from "../Buttons/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <section className="container-section">
      <div className="form-container">
        <div className="top-btn">
          <Button
            text="VIA CHAT SUPPORT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            // onClick={onViaCall}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>
        <div className="btn">
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="24px" />}
          />
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-controller">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-controller">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="eamil" />
          </div>
          <div className="form-controller">
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" rows="6"></textarea>
          </div>
          <div className="submit">
            <Button isOutline={false} text="SUBMIT" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>

      <div className="image">
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
