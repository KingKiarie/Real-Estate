import { Link } from "react-router-dom";
import Logo from "../../assets/favicon.png";
import styles from "./index.module.css";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <div className={styles.leftbar}>
        <Link to="/buy">Buy</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/Agent">Agent</Link>
      </div>
      <div className={styles.img}>
        <Link to="/">
          <img className={styles.Logo} src={Logo} alt="Evergreen Logo" />
        </Link>
      </div>
      <div className={styles.rightbar}>
        <Link to="/ads">Advertise</Link>
        <Link to="/help">Help</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default NavBar;
