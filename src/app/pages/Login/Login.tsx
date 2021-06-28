import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo";
import LabeledInput from "../../components/LabeledInput/LabeledInput";

function Login(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.logo}>
        <Logo />
      </header>
      <main className={styles.main}>
        <LabeledInput placeholder="E-Mail" type="email" value="email" />
        <LabeledInput placeholder="Password" type="password" value="password" />
        <span className={styles.main__text}>Passwort vergessen?</span>
        <Link to="/dashboard" className={styles.link}>
          Login
        </Link>
      </main>
      <footer className={styles.footer}>
        <span>Noch kein Nutzerkonto?</span>
        <span className={styles.bold}>Hier registrieren</span>
      </footer>
    </div>
  );
}

export default Login;
