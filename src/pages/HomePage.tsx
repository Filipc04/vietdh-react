import { Header, LunchMenu, RestaurantInfo, DinnerMenu, Footer } from "../components"
import styles from './HomePage.module.css'

export const HomePage = () => {
  return(
    <>
      <Header />
      <div className={styles.lunchAndInfo}>
        <LunchMenu />
        <RestaurantInfo />
      </div>
      <DinnerMenu />
      <Footer />
    </>
    
  )
}

