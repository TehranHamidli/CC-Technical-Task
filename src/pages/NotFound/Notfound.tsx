import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className={styles.homeLink}>Go to Home</Link>
    </div>
  );
};

export default NotFound;
