import React from "react";
import styles from "./RoundImage.module.css";

type RoundImageProps = {
  imageSrc: string;
};

function RoundImage({ imageSrc }: RoundImageProps): JSX.Element {
  return <img src={imageSrc} className={styles.img} />;
}

export default RoundImage;
