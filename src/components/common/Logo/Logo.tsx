import React from "react";
import logo from "../../../assets/images/logo.svg";
import logoWhite from "../../../assets/images/logoWhite.svg";
import styles from "./Logo.module.scss";

interface LogoProps {
  variant?: "default" | "white";
}

const Logo: React.FC<LogoProps> = ({ variant = "default" }) => {
  const logoSrc = variant === "white" ? logoWhite : logo;

  return (
    <div className={styles.logo}>
      <img src={logoSrc} alt="logo" />
    </div>
  );
};

export default Logo;
