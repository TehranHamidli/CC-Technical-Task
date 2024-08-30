import React from "react";
import classNames from "classnames";
import styles from "./Text.module.scss";

interface TextProps {
  size?: "small" | "medium" | "large" | "Xlarge";
  color?: "primary" | "white" | "gray" | "red";
  weight?: "light" | "regular" | "bold";
  font?: "poppins" | "inter" | "montserrat";
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  size = "medium",
  color = "primary",
  weight = "regular",
  font = "poppins",
  children,
}) => {
  const textClass = classNames(
    styles.text,
    styles[size],
    styles[color],
    styles[weight],
    styles[font]
  );

  return <p className={textClass}>{children}</p>;
};

export default Text;
