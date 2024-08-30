import { useState } from "react";
import styles from "./LangSwitcher.module.scss";
import arrowBottom from "../../../assets/images/arrow-bottom.svg";
import { useTranslation } from "react-i18next";
import Text from "../Text/Text";

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language.toUpperCase()
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language.toUpperCase());
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSwitcher}>
      <div className={styles.dropdownButton} onClick={toggleDropdown}>
        <Text size="medium" color="white" font="poppins" weight="regular">
          {selectedLanguage}
        </Text>
        <img src={arrowBottom} alt="dropdown arrow" className={styles.arrow} />
      </div>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.menuItem} onClick={() => changeLanguage("en")}>
            <Text size="medium" color="primary" font="poppins" weight="regular">
              EN
            </Text>
          </div>
          <div className={styles.menuItem} onClick={() => changeLanguage("az")}>
            <Text size="medium" color="primary" font="poppins" weight="regular">
              AZ
            </Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
