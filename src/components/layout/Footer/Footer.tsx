import { NavLink } from "react-router-dom";
import Logo from "../../common/Logo/Logo";
import Text from "../../common/Text/Text";
import styles from "./Footer.module.scss";
import mailIcon from "../../../assets/images/mail-icon.svg";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navLink}>
          <NavLink to="events">{t("Events")}</NavLink>
          <NavLink to="/about">{t("About Us")}</NavLink>
          <NavLink to="/contact">{t("Contact Us")}</NavLink>
          <NavLink to="/signin">{t("Sign in")}</NavLink>
        </div>
        <div className={styles.footerContact}>
          <Logo variant="white" />
          <div className={styles.mail}>
            <img src={mailIcon} />
            <Text size="medium" color="white" font="poppins" weight="regular">
              eventlinks@gmail.com
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
