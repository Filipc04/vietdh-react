import styles from './ErrorPage.module.css'
import { Link } from 'react-router'

export const ErrorPage = () => {
  
  return(
    <>
    <div className={styles.errorPage}>
      <img src="src/assets/vietdh_error.png" alt="" className={styles.errorImg}/>
      <p className={styles.errorText}>Sidan kunde inte hittas.</p>
      <Link to={'/'}>
        <button className={styles.goBackBtn}>Gå tillbaka till Viet DH</button>
      </Link>
      
    </div>
    </>
  )
}