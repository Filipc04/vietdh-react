import styles from './Reviews.module.css';

export const Reviews = () => {
	return (
		<div className={styles.reviewDiv}>
			<h2>Recensioner</h2>

			<div className={styles.reviewCards}></div>
		</div>
	);
};
