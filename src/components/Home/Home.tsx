import React from "react";
import { useEffect } from "react";
import { Spinner } from "../Spinner/Spinner";
import { NavBar } from "../NavBar/NavBar";
import { Subheader } from "../Subheader/Subheader";
import { WhatsAppLink } from "../WhatsAppLink/WhatsAppLink";
import { Footer } from "../Footer/Footer";
import "aos/dist/aos.css";

export function Home(): JSX.Element {
  return (
    <>
      <Spinner />
      <NavBar />
      <Subheader />
      <WhatsAppLink />
      <Footer />
    </>
  );
}
