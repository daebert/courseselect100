import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo";
import LabeledInput from "../../components/LabeledInput/LabeledInput";

function Login(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.container}>
      <header className={styles.logo}>
        <Logo />
      </header>
      <main>
        <form className={styles.form}>
          <LabeledInput
            placeholder="E-Mail"
            type="email"
            value={email}
            onChange={setEmail}
          />
          <LabeledInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <span className={styles.form__text}>Passwort vergessen?</span>
          <Link to="/dashboard" className={styles.link}>
            Login
          </Link>
        </form>
      </main>
      <footer className={styles.footer}>
        <span>Noch kein Nutzerkonto?</span>
        <span className={styles.bold}>Hier registrieren</span>
      </footer>
    </div>
  );
}

export default Login;
