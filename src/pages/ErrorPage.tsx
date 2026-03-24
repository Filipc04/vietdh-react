import { Link } from 'react-router';
import styles from './ErrorPage.module.css';

export const ErrorPage = () => {
	return (
		<div className={styles.errorPage}>
			<img
				src="src/assets/vietdh_error.png"
				alt=""
				className={styles.errorImg}
			/>
			<p className={styles.errorText}>Sidan kunde inte hittas.</p>
			<Link to={'/'}>
				<button type="button" className={styles.goBackBtn}>
					Gå tillbaka till Viet DH
				</button>
			</Link>
		</div>
	);
};
