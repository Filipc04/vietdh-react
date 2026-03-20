import { InfoObject } from "./info"
import styles  from './RestaurantInfo.module.css'

export function RestaurantInfo() {
  {/* TODO: Add images here? idk */ }
  return(
    <div className={styles.infoContainer}>
      <button className={styles.orderButton}>Ring och beställ</button>
      <div className={styles.openingHours}>{InfoObject.openingHours}</div>
      <div className={styles.address}>{InfoObject.address}</div>
    </div>
  )
}