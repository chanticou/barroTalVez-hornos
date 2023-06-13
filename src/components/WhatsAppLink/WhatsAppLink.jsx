import React from "react";
import whatsAppLogo from "../../assets/images/whatsAppLogo.png";
import "./WhatsAppLink.css";

export const WhatsAppLink = () => {
  const phoneNumber = "1528849705"; // número de teléfono

  const url = `https://wa.me/${phoneNumber}`;

  return (
    <div>
      <div className="whatsapp-link ">
        <a href={url}>
          <img src={whatsAppLogo} alt="WhatsApp logo" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppLink;
