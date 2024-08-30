import Logo from "../../common/Logo/Logo";
import styles from "./Header.module.scss";
import SearchIcon from "../../../assets/images/search-icon.svg";
import UserIcon from "../../../assets/images/user-icon.svg";
import CartIcon from "../../../assets/images/shopping-bag.svg";
import LangSwitcher from "../../common/LangSwitcher/LangSwitcher";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Logo />
        <div className={styles.navLink}>
          <NavLink to="events">{t("Events")}</NavLink>
          <NavLink to="/about">{t("About Us")}</NavLink>
          <NavLink to="/contact">{t("Contact Us")}</NavLink>
        </div>
      </div>

      <div className={styles.headerIcons}>
        <LangSwitcher />
        <div className={styles.icons}>
          <img src={SearchIcon} alt="search icon" />
          <img src={UserIcon} alt="user icon" />
          <img src={CartIcon} alt="shopping icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
