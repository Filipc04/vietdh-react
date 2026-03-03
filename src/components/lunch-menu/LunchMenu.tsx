import { dailyMeals } from './data';
import styles from './LunchMenu.module.css';
import { MenuEntry } from './MenuEntry';

export function LunchMenu() {
	return (
		<div className={styles.lunchMenu}>
			<h2>Lunchmeny</h2>
			<div className={styles.days}>
				{dailyMeals.map((dayAndMeal) => (
					<MenuEntry title={dayAndMeal.day} meals={dayAndMeal.meals} />
				))}
			</div>
		</div>
	);
}
