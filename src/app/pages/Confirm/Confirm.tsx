import React from "react";
import styles from "./Confirm.module.css";
import Logo from "../../assets/icons/Logo";

function Login(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.logo}>
        <Logo />
      </header>
      <main className={styles.main}>
        <div>Vielen Dank für Deine Auswahl!</div>
        <div>
          Wir werden Dich in Kürze per Email über das Ergebnis informieren.
        </div>
      </main>
    </div>
  );
}

export default Login;
