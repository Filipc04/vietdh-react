import {
	DinnerMenu,
	Footer,
	Header,
	LunchMenu,
	RestaurantInfo,
	Reviews,
} from '../components';
import styles from './HomePage.module.css';

export const HomePage = () => {
	return (
		<>
			<Header />
			<div className={styles.lunchAndInfo}>
				<LunchMenu />
				<RestaurantInfo />
			</div>
			<DinnerMenu />
			<Reviews />
			<Footer />
		</>
	);
};
