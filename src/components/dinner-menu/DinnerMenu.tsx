import styles from './DinnerMenu.module.css';
import { dinnerMeals } from './data';

const categoryStarts = dinnerMeals.map((_, i) =>
	dinnerMeals.slice(0, i).reduce((sum, c) => sum + c.meals.length, 1),
);

const NO_NUMBER_CATEGORIES = ['Efterrätt', 'Tillbehör'];

export const DinnerMenu = () => {
	return (
		<div className={styles.dinnerMenuContainer}>
			<h2>Kvällsmeny</h2>
			<div className={styles.gridContainer}>
				{dinnerMeals.map((category, categoryIndex) => {
					const categoryStart = categoryStarts[categoryIndex];
					const regularMeals = category.meals.filter((meal) => !meal.note);
					const noteMeals = category.meals.filter((meal) => meal.note);
					const numbered = !NO_NUMBER_CATEGORIES.includes(
						category.mealCategory,
					);
					const ListTag = numbered ? 'ol' : 'ul';

					return (
						<div key={category.mealCategory} className={styles.gridItem}>
							<div className={styles.mealCategory}>{category.mealCategory}</div>
							<ListTag {...(numbered ? { start: categoryStart } : {})}>
								{regularMeals.map((meal) => (
									<li key={meal.text}>
										<div className={styles.menuItem}>
											<span>{meal.text}</span>
											<span>{meal.price ? `${meal.price}kr` : ''}</span>
										</div>
									</li>
								))}
							</ListTag>
							{noteMeals.map((meal) => (
								<div key={meal.text} className={styles.noteItem}>
									<span>{meal.text}</span>
									<span>{meal.note}</span>
								</div>
							))}
						</div>
					);
				})}
			</div>
		</div>
	);
};
