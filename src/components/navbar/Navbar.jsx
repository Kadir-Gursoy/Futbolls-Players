import logo from "../../helpers/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="futboll" />
      </div>
      <div className="links">
        <a href="#horoscope">Futbolcu </a>
        <a href="#daily">Takımı </a>
        <a href="#tarot">Hayatı </a>
        <a href="#article">Goller </a>
        <a href="#contact">Videolar </a>
      </div>
    </div>
  );
};
export default Navbar;
