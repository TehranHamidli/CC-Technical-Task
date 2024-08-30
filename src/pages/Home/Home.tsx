import styles from "./Home.module.scss";
import Text from "../../components/common/Text/Text";
import Button from "../../components/common/Button/Button";
import CategoryItem from "../../components/ui/category/CategoryItem";
import {
  categoryData,
  popularEvents,
  upcomingEvents,
  popularDestinations,
} from "../../data/data";
import joinImage from "../../assets/images/join-image.svg";
import Slider from "../../components/ui/Slider/Slider";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.introContainer}>
        <div className={styles.introContent}>
          <Text size="Xlarge" weight="bold" color="white" font="poppins">
            {t("Enjoy your city to the fullest")}
          </Text>
          <Text size="medium" weight="regular" color="white" font="montserrat">
            {t(
              "Find events that match your interests and book your tickets effortlessly. From theater shows to sports events, we have it all!"
            )}
          </Text>
          <Button>
            <Text size="medium" weight="regular" color="white" font="poppins">
              {t("Find events")}
            </Text>
          </Button>
        </div>
      </section>
      <div className="container">
        <section className={styles.categoryList}>
          {categoryData.map((item, index) => (
            <CategoryItem
              key={index}
              title={t(item.title)}
              imageUrl={item.imageUrl}
            />
          ))}
        </section>

        <div className={styles.popularTitle}>
          <Text size="large" weight="bold" color="primary" font="poppins">
            {t("Popular events near you")}
          </Text>
          <Text size="medium" weight="bold" color="primary" font="poppins">
            {t("See all")}
          </Text>
        </div>
        <Slider
          events={popularEvents}
          prevButtonClass={styles.customPrevPopular}
          nextButtonClass={styles.customNextPopular}
        />

        <div className={styles.popularTitle}>
          <Text size="large" weight="bold" color="primary" font="poppins">
            {t("Upcoming events")}
          </Text>
          <Text size="medium" weight="bold" color="primary" font="poppins">
            {t("See all")}
          </Text>
        </div>
        <Slider
          events={upcomingEvents}
          prevButtonClass={styles.customPrevUpcoming}
          nextButtonClass={styles.customNextUpcoming}
        />

        <section className={styles.popularDestinationsList}>
          <Text size="large" weight="bold" color="primary" font="poppins">
            {t("Popular destinations")}
          </Text>
          <div>
            {popularDestinations.map((item, index) => (
              <div className={styles.popular} key={index}>
                <img src={item.imageUrl} />
                <Text size="large" weight="bold" color="primary" font="poppins">
                  {item.text}
                </Text>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.joinContainer}>
          <div className={styles.joinText}>
            <Text size="large" weight="bold" color="primary" font="poppins">
              {t("Join eventslink")}
            </Text>
            <Text
              size="medium"
              weight="light"
              color="primary"
              font="montserrat"
            >
              {t(
                "People use Eventslink to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together. Membership is free."
              )}
            </Text>
            <Button>
              <Text size="medium" weight="regular" color="white" font="poppins">
                {t("Sign Up")}
              </Text>
            </Button>
          </div>
          <div className={styles.joinImage}>
            <img src={joinImage} alt="image" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
