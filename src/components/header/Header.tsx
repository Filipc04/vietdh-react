import styles from './Header.module.css';
import { NavLink } from 'react-router'

export function Header() {
	return (
		<header className={styles.header}>
			<img className={styles.vietLogo} src="/vietdh_logo_yellow.png" alt="" />
			<section className={styles.links}>
				<NavLink to={'/bilder'} className={styles.imagesLink}>Bilder</NavLink>
				{/* <a className={styles.imagesLink}>Kvällsmeny</a> */}
			</section>
		</header>
	);
}
