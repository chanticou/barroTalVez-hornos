import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import { Link } from "react-router-dom";
import "animate.css";
import "./NavBar.css";

export function NavBar(): JSX.Element {
  return (
    <>
      <div className="navBar-background_image">
        <div className="navBar-content_backLine">
          <div>
            <img className="redes" src={instagram}></img>
          </div>
          <div>
            <img className="redes" src={facebook}></img>
          </div>
        </div>
        <div className="navBar-content_title">
          <div className="navBar-content_opacity">
            <h1 className="navBar-title animate__animated animate__backInDown">
              BARROTALVEZ
            </h1>

            <h2 className="navBar-subtitle animate__animated animate__backInDown">
              Hornos artesanales
            </h2>
            <h3 className="navBar-subtitle animate__animated animate__backInDown">
              GRILL AHUMADO
            </h3>
          </div>
        </div>
        <div>
          <ul className="navBar-content_ul">
            <div className="navBar-ul_1">
              <Link className="LINK" to="/">
                <div className="box-1">
                  <div className="btn btn-one">
                    <span>Home</span>
                  </div>
                </div>
              </Link>
              <div className="box-1">
                <div className="btn btn-one">
                  <span>Creado</span>
                </div>
              </div>
            </div>
            <div className="navBar-ul_2">
              <Link className="LINK" to="/contact">
                <div className="box-1">
                  <div className="btn btn-one">
                    <span>Contacto</span>
                  </div>
                </div>
              </Link>
              <div className="box-1">
                <div className="btn btn-one">
                  <span>Hornos</span>
                </div>
              </div>
            </div>
            {/* <button className="glow-on-hover" type="button">
              Nosotros
            </button>
            <button className="glow-on-hover" type="button">
              Contacto
            </button>
            <button className="glow-on-hover" type="button">
              Nosotros
            </button> */}
          </ul>
        </div>
      </div>
    </>
  );
}
