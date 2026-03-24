import styles from './Header.module.css';
import { NavLink } from 'react-router';

export function Header() {
	return (
		<header className={styles.header}>
			<NavLink to={'/'}>
				<img className={styles.vietLogo} src="/vietdh_logo_yellow.png" alt="" />
			</NavLink>
			<section className={styles.links}>
				<NavLink to={'/bilder'} className={styles.imagesLink}>Bilder</NavLink>
			</section>
		</header>
	);
}
