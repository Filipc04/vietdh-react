import styles from './Header.module.css';
import { NavLink } from 'react-router';

export function Header() {
	return (
		<header className={styles.header}>
			<NavLink to={'/'}>
				<img className={styles.vietLogo} src="/vietdh_logo_yellow.png" alt="" />
			</NavLink>
			<section className={styles.links}>
				{/* <a className={styles.imagesLink}>Kvällsmeny</a> */}
			</section>
		</header>
	);
}
