import React, { Component, useState, useEffect } from "react";
import { productos } from "../../utils/hornos.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import barbacue from "../../assets/images/barbacue2.png";
import chicken from "../../assets/images/chicken.png";
import bb1 from "../../assets/images/bb1.jpg";
import bb2 from "../../assets/images/bb2.jpg";
import bb3 from "../../assets/images/bb3.jpg";
import bb4 from "../../assets/images/bb4.jpg";
import AOS from "aos";

// import pan from "../../assets/images/pan.png";
// import lasaña from "../../assets/images/lasaña.png";

// import hamburguer from "../../assets/images/hambruguer.png";
// import BaW3 from "../../assets/images/BaW3-1.jpg";

import "./Subheader.css";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  disponibilidad: boolean;
  imagen: string;
}

export function Subheader(): JSX.Element {
  const [myProducts, setmyProducts] = useState<Producto[]>(productos);

  useEffect(() => {
    AOS.init();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/* FIRST PART/IMAGE */}
      <div className="subHeader-content_imag2">
        <div className="subHeader-content_titles">
          <div className="content_right">
            <div data-aos="fade-up" data-aos-duration="3000">
              <h2 className="subHeader-quienesSomos_title">¿Quiénes somos?</h2>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000">
              <h3 className="subHeader-quienesSomos_subtitle">
                Somos una empresa familair
              </h3>
            </div>
            <div data-aos="fade-down" data-aos-duration="3000">
              <p className="subHeader-quienesSomos_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                veniam saepe! Cumque nulla aliquam rerum saepe minima quaerat
                aut maxime quod eos officia veritatis quis laudantium, ipsa
                magni illo at. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minus, veniam saepe! Cumque nulla aliquam
                rerum saepe minima quaerat aut maxime quod eos officia veritatis
                quis laudantium, ipsa magni illo at.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SECOND PART/IMAGE */}
      <div className="content-subHeader">
        <div className="subHeader-content_backLine">
          <h1>EL MEJOR SECRETO DE LA COMIDA AHUMADA</h1>
        </div>

        <div className="subHeader-content_carrousel">
          <Carousel responsive={responsive}>
            {myProducts?.length ? (
              myProducts.map((el) => {
                return (
                  <div className="subHeader-content_carrousel">
                    {/* <h1 className="subHeader-title">{el.nombre}</h1> */}
                    <div className="subHeader-content_image">
                      <img
                        className="subHeader-image_carrousel"
                        src={el.imagen}
                        alt="Horno imágen"
                      ></img>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>NOO HAY NADA</h1>
            )}
          </Carousel>
        </div>
      </div>
      {/* Thrist part */}
      <div className="subHeader_contentBackground">
        <div className="subHeader-content_line_recipes">
          <h1>Nuestras recetas</h1>
        </div>
        <div className="subHeaer-content_thristPart">
          <div className="subHeader-content_images_blackAndWhite">
            <div className="subHeader-content_image_blackAndWhite">
              <div data-aos="flip-left" data-aos-duration="2000">
                <img src={barbacue} alt="Foods images"></img>
              </div>
            </div>
            <div className="subHeader-content_image_blackAndWhite">
              <div data-aos="flip-left" data-aos-duration="2000">
                <img src={bb1} alt="Foods images"></img>
              </div>
            </div>
            <div className="subHeader-content_image_blackAndWhite">
              <div data-aos="flip-left" data-aos-duration="2000">
                <img src={chicken} alt="Foods images"></img>
              </div>
            </div>
            <div className="subHeader-content_image_blackAndWhite">
              <div data-aos="flip-right">
                <img src={bb2} alt="Foods images"></img>
              </div>
            </div>
            <div className="subHeader-content_image_blackAndWhite">
              <div data-aos="flip-right">
                <img src={bb4} alt="Foods images"></img>
              </div>
            </div>
            <div className="subHeader-content_image_blackAndWhite">
              <div data-aos="flip-right">
                <img src={bb3} alt="Foods images"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
