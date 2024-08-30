import React, { useState } from "react";
import styles from "./EventCard.module.scss";
import Text from "../../common/Text/Text";
import heartIcon from "../../../assets/images/heart.svg";
import { useTranslation } from "react-i18next";

interface EventCardProps {
  title: string;
  imageUrl: string;
  dateText: string;
  dateIcon: string;
  checkText: string;
  checkIcon: string;
  ticketText: string;
  ticketIcon: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  imageUrl,
  dateText,
  dateIcon,
  checkText,
  checkIcon,
  ticketText,
  ticketIcon,
}) => {
  const { t } = useTranslation();
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className={styles.cardContainer}>
      <div className={styles.heartIconContainer} onClick={toggleLike}>
        <img
          src={heartIcon}
          alt="Heart Icon"
          className={`${styles.heartIcon} ${isLiked ? styles.liked : ""}`}
        />
      </div>
      <img src={imageUrl} alt="event" className={styles.eventImage} />

      <div className={styles.eventDetails}>
        <Text font="poppins" size="medium" color="primary" weight="bold">
          {t(title)}
        </Text>
        <div className={styles.dateContainer}>
          <img src={dateIcon} alt="Date Icon" className={styles.icon} />
          <Text font="poppins" size="small" color="gray">
            {t(dateText)}
          </Text>
        </div>
        <div className={styles.checkContainer}>
          <img src={checkIcon} alt="Check Icon" className={styles.icon} />
          <Text font="poppins" size="small" color="gray">
            {checkText}
          </Text>
        </div>
        <div className={styles.ticketContainer}>
          <img src={ticketIcon} alt="Ticket Icon" className={styles.icon} />
          <Text font="poppins" size="small" color="red" weight="bold">
            {ticketText}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
