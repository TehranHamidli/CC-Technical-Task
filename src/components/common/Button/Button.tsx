import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  variant = "primary",
  children,
}) => {
  const buttonClass = classNames(styles.button, styles[variant], className);

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
