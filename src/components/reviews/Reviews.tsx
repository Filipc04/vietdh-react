import { ReviewData } from './data';
import styles from './Reviews.module.css';

export const Reviews = () => {
	return (
		<div className={styles.reviewDiv}>
			<h2>Recensioner</h2>
			<div className={styles.reviewRow}>
				{ReviewData.map((reviews) => (
					<div key={reviews.text} className={styles.review}>
						<div className={styles.reviewHeader}>
							<div className={styles.name}>{reviews.name}</div>
							<a href={reviews.link} target="_blank">
								<img src="Google_Favicon.png" alt="" className={styles.icon} />
							</a>
						</div>
						<div className={styles.text}>
							<i>{reviews.text}</i>
						</div>
						<div className={styles.rating}>{reviews.rating}/5 ⭐</div>
					</div>
				))}
			</div>
			<div className={styles.reviewCards}></div>
		</div>
	);
};
