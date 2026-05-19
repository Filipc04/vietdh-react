import { NavLink } from 'react-router';
import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<NavLink to={'/'}>
				<img className={styles.vietLogo} src="/vietdh_logo_yellow.png" alt="" />
			</NavLink>
		</header>
	);
}
