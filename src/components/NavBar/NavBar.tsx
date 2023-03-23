import "animate.css";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
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
            <button className="glow-on-hover" type="button">
              Nosotros
            </button>
            <button className="glow-on-hover" type="button">
              Contacto
            </button>
            <button className="glow-on-hover" type="button">
              Nosotros
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
