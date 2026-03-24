import { NavLink } from 'react-router';
import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<NavLink to={'/'} className={styles.imagesLink}>
				Hem
			</NavLink>

			<NavLink to={'/'}>
				<img className={styles.vietLogo} src="/vietdh_logo_yellow.png" alt="" />
			</NavLink>

			<NavLink to={'/bilder'} className={styles.imagesLink}>
				Bilder
			</NavLink>
		</header>
	);
}
