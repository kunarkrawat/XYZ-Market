import classes from "./Navbar.module.css";
import { useRef } from "react";

const Navbar = () => {
  const menuBarRef = useRef(null);

  const menuBarHandler = () =>
    menuBarRef.current.style.display === "none"
      ? (menuBarRef.current.style.display = "block")
      : (menuBarRef.current.style.display = "none");

  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <img src='/images/logo.png' alt='' />
        </div>
        <ul className={classes.web}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            {" "}
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#pricing'>Price</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <img
          className={classes.hamburger}
          src='/images/hamburger.svg'
          alt='mobileMenubar'
          onClick={menuBarHandler}
        />
      </nav>
      <ul className={classes.mobile} ref={menuBarRef}>
        <li style={{ paddingTop: "1rem" }}>
          <a href='#home'>Home</a>
        </li>
        <li>
          {" "}
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#pricing'>Price</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
