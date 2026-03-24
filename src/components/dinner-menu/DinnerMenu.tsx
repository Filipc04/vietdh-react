import styles from './DinnerMenu.module.css';
import { dinnerMeals } from './data';

const categoryStarts = dinnerMeals.map((_, i) =>
	dinnerMeals.slice(0, i).reduce((sum, c) => sum + c.meals.length, 1),
);

export const DinnerMenu = () => {
	return (
		<div className={styles.dinnerMenuContainer}>
			<h2>Kvällsmeny</h2>
			<div className={styles.gridContainer}>
				{dinnerMeals.map((category, categoryIndex) => {
					const categoryStart = categoryStarts[categoryIndex];
					return (
						<div key={category.mealCategory} className={styles.gridItem}>
							<div className={styles.mealCategory}>{category.mealCategory}</div>
							<ol start={categoryStart}>
								{category.meals.map((meal) => (
									<li key={meal.text}>
										<div className={styles.menuItem}>
											<span>{meal.text}</span>
											<span>{meal.price ? `${meal.price}kr` : ''}</span>
										</div>
										{meal.variants && (
											<ul>
												{meal.variants.map((variant) => (
													<li key={variant}>{variant}</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ol>
						</div>
					);
				})}
			</div>
		</div>
	);
};
