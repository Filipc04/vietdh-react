import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<img className={styles.vietLogo} src="/vietdh_logo_yellow.png" alt="" />
			<section className={styles.links}>
				<a href="/" className={styles.imagesLink}>
					Bilder
				</a>
				{/* <a className={styles.imagesLink}>Kvällsmeny</a> */}
			</section>
		</header>
	);
}
