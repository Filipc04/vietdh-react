import {
	dailyMealsEven,
	/* dailyMealsOdd, */
} from './data';

import styles from './LunchMenu.module.css';
import { MenuEntry } from './MenuEntry';

export function LunchMenu() {
	return (
		<div className={styles.lunchMenu}>
			<h2>Lunchmeny</h2>
			<div className={styles.days}>
				{dailyMealsEven.map((dayAndMeal) => (
					<MenuEntry
						key={dayAndMeal.day}
						title={dayAndMeal.day}
						meals={
							typeof dayAndMeal.meals === 'string'
								? [{ text: dayAndMeal.meals }]
								: dayAndMeal.meals
						}
					/>
				))}
			</div>
		</div>
	);
}
