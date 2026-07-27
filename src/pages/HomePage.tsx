import {
  DinnerMenu,
  Footer,
  Header,
  LunchMenu,
  RestaurantInfo,
  Reviews,
} from "../components";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <Header />
      <h1 className={styles.tempHeader}>
        Stängt den 30/7 (Torsdag)! Öppet igen fredag.
      </h1>
      <div className={styles.lunchAndInfo}>
        <LunchMenu />
        <RestaurantInfo />
      </div>
      <DinnerMenu />
      <Reviews />
      <Footer />
    </>
  );
};
