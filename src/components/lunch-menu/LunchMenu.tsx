import { dailyMeals } from './data';
import styles from './LunchMenu.module.css';
import { MenuEntry } from './MenuEntry';

export function LunchMenu() {
	return (
		<div className={styles.lunchMenu}>
			<h2>Lunchmeny</h2>
			<div className={styles.days}>
				<h4>
					Idag stänger vi klockan 14.00. Välkommen åter!
					Student - 85kr, med läsk - 90kr
					<br />
					Standard lunchpris: Avhämtning - 90kr, Servering - 95kr
				</h4>
				{dailyMeals.map((dayAndMeal) => (
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
