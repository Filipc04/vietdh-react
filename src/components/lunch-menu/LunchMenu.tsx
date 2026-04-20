import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { dailyMealsEven, dailyMealsOdd } from './data';
import styles from './LunchMenu.module.css';
import { MenuEntry } from './MenuEntry';

export function LunchMenu() {
	dayjs.extend(isoWeek);
	const currentWeek = dayjs().isoWeek();

	const evenWeek = currentWeek % 2 === 0;
	const meals = evenWeek ? dailyMealsEven : dailyMealsOdd;

	return (
		<div className={styles.lunchMenu}>
			<h2>Lunchmeny</h2>
			<div className={styles.days}>
				<h4>
					Student - 80kr, med läsk - 85kr
					<br />
					Standard lunchpris: Avhämtning - 90kr, Servering - 95kr
				</h4>
				{meals.map((dayAndMeal) => (
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
