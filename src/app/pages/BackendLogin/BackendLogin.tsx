import React, { useState } from "react";
import { Link } from "react-router-dom";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import styles from "./BackendLogin.module.css";

function BackendLogin(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.container}>
      <header className={styles.logo}>
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
            <Link to="#" className={styles.link}>
              Login
            </Link>
          </form>
        </main>
      </header>
    </div>
  );
}

export default BackendLogin;
