import { ReviewData } from './data';
import styles from './Reviews.module.css';

export const Reviews = () => {
	return (
		<div className={styles.reviewDiv}>
			<h2>Recensioner</h2>
			<div className={styles.reviewRow}>
				{ReviewData.map((reviews) => (
					<div key={reviews.text} className={styles.review}>
						<div className={styles.name}>{reviews.name}</div>
						<div className={styles.text}>{reviews.text}</div>
						<div className={styles.rating}>{reviews.rating}/5 ⭐</div>
					</div>
				))}
			</div>
			<div className={styles.reviewCards}></div>
		</div>
	);
};
