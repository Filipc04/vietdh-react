import styles from './Footer.module.css'

export const Footer = () => {
  return(
    <div className={styles.footer}>
      <div className={styles.buttonDiv}>
        <button className={styles.contactButton}>Ring</button>
        <button className={styles.contactButton}>Mejla</button>
      </div>
      <div className={styles.buttonDiv}>
        <button className={styles.socialsButton}>F</button>
        <button className={styles.socialsButton}>I</button>
        <button className={styles.socialsButton}>G</button>
        <button className={styles.socialsButton}>M</button>
      </div>
      <div>Viet DH 2026 ©</div>
    </div>
  )
}