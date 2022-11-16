import Container from "../ui/Container";
import logo from "../../images/logo.png";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <img src={logo} alt="logo" />
        <ul>
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
      </Container>
    </footer>
  );
};
