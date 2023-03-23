import React, { Component, useState } from "react";
import { productos } from "../../utils/hornos.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    </>
  );
}
