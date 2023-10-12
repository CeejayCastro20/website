import React, { useState } from "react";
import styles from "./Home.module.css";
import Burger from "../images/burger.svg";
import Close from "../images/closeIcon.svg";
import Logo from "../images/tupLogo.png";
import Request from "../images/request.png";
import Validation from "../images/validation.png";
import Logout from "../images/logoutIcon.png";
import Maker from "../images/maker.png";
import { Link } from "react-router-dom";

function Home() {
  const [isBurger, setIsBurger] = useState(false);
  const handleBurgerClick = () => {
    setIsBurger(!isBurger);
    console.log("burgerState", isBurger);
  };
  return (
    <div className={styles.container}>
      <div className={styles.con}>
        <div className={styles.above}>
          <div className={styles.navTitle}>
            <img src={Logo} />
            <h6></h6>
          </div>
          <div className={styles.navBurger} onClick={handleBurgerClick}>
            <img src={isBurger ? Close : Burger} sizes={50} />
          </div>
        </div>
        <div className={styles.spread}>
          <div className={styles.cards}>
            <Link to="/Validation" className={styles.button}>
              <img src={Validation} alt="validation" />
            </Link>
            <h1>ID VALIDATION</h1>
          </div>
          <div className={styles.cards}>
            <Link to="/Request" className={styles.button}>
              <img src={Request} alt="validation" />
            </Link>
            <h1>ID REQUESTING</h1>
          </div>
          <div className={styles.cards}>
            <Link to="/ID_MAKER" className={styles.button}>
              <img src={Maker} alt="validation" />
            </Link>
            <h1>ID MAKER</h1>
          </div>
        </div>
      </div>
      {isBurger ? (
        <div className={styles.navCard}>
          <Link to="/">
            <img src={Logout} onClick={handleBurgerClick} />
            Logout
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
