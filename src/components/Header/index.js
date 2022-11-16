import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import styles from "./style.module.scss";
import Container from "../ui/Container";
import { Link } from "react-router-dom";
export const Header = () => {
  
  const [mobileActive, setMobileActive] = useState(false)
  const handleMobile = ()=>{
    setMobileActive((prevState => !prevState))
  }

  const [bottom, setBottom] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 50){
        setBottom(true)
      }
      else setBottom(false)
    })

  },[])


  return (
    <header className={`${styles.header} ${bottom ? styles.headerBottom : ""}`}>
      <Container className={styles.header__container}>
        <Link to="/#">
          <img src={logo} alt="logo" />
        </Link>
        <ul className={mobileActive ? styles.active : styles.desactive}>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/">SEO Consulting</Link>
          </li>
          <li>
            <Link to="/">Contact me</Link>
          </li>
        </ul>

        <div className={styles.buttonsContainer}>
        <button 
          className={`${styles.mobilebutton} ${
            mobileActive ? styles.active : ""
          }`}
          onClick={handleMobile}
          >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className={styles.seoButton}>SEO Newssletter</button>
        </div>
      </Container>
    </header>
  );
};
