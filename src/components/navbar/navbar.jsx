import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import styles from "../navbar/navbar.modules.css";

const NavBar = () => {
  return (
    <>
      <nav style={styles.NavBar}>
        <div>
          <Link to={"/buy"}>Buy</Link>
          <Link to={"/sell"}>Sell</Link>
          <Link to={"/rent"}>Rent</Link>
          <Link to={"/Agent"}>Agent</Link>
        </div>
        <div>
          <img src={Logo} alt="Evergreen Logo" />
        </div>
        <div>
          <Link to={"/ads"}>Advertise</Link>
          <Link to={"/help"}>Help</Link>
          <Link to={"/signup"}>Signup</Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
