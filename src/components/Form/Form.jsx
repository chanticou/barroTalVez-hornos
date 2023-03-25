import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import { useState } from "react";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { NavBar } from "../NavBar/NavBar";

export const Form = () => {
  const form = useRef();
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [placeHolder, setPlaceHolder] = useState({
    name: "Name",
    email: "Email",
    message: "Message",
  });

  const [errors, setErrors] = useState(true);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    if (e.target.name === "user_name") {
      setPlaceHolder((prevState) => ({
        ...prevState,
        name: "",
        email: "Email",
        message: "Message",
      }));
    }
    if (e.target.name === "user_email") {
      setPlaceHolder((prevState) => ({
        ...prevState,
        name: "Name",
        email: "",
        message: "Message",
      }));
    }
    if (e.target.name === "message") {
      setPlaceHolder((prevState) => ({
        ...prevState,
        name: "Name",
        email: "Email",
        message: "",
      }));
    }
  };

  const handleMouseOut = () => {
    setPlaceHolder((prevState) => ({
      ...prevState,
      name: "Name",
      email: "Email",
      message: "Message",
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!input.user_name || !input.user_email || !input.message) {
      setErrors(false);
    } else {
      setInput({ user_name: "", user_email: "", message: "" });
      setErrors(false);
      Swal.fire("¡Muchas gracias! El e-mail fue enviado con exito.");
      emailjs
        .sendForm(
          "service_3bom90g",
          "template_f23gavh",
          form.current,
          "LdNY-iThbpDaasQfy"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <NavBar />
      <div className="content_form">
        <form className="form" onSubmit={sendEmail}>
          <div className="content_name_email">
            <input
              onMouseOut={() => handleMouseOut()}
              onMouseOver={(e) => handleClick(e)}
              onChange={(e) => handleChange(e)}
              type="text"
              name="user_name"
              placeholder={placeHolder.name}
              value={input.user_name}
              className="input_form"
            />

            <input
              onMouseOut={() => handleMouseOut()}
              onMouseOver={(e) => handleClick(e)}
              onChange={(e) => handleChange(e)}
              type="email"
              name="user_email"
              placeholder={placeHolder.email}
              value={input.user_email}
              className="input_form"
            />
          </div>

          {/* <div className="content_text"> */}
          <textarea
            onMouseOut={() => handleMouseOut()}
            onMouseOver={(e) => handleClick(e)}
            onChange={(e) => handleChange(e)}
            name="message"
            value={input.message}
            className="form_message"
            placeholder={placeHolder.message}
          />

          <span
            hidden={
              input.user_name && input.user_email && input.message
                ? !errors
                : errors
            }
          >
            <h3 className="form_error">Falta completar datos</h3>
          </span>

          <input className="form_submit_button" type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};
