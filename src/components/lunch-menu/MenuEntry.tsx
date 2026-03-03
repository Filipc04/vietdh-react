import styles from './MenuEntry.module.css';
import type { Meal } from './types';

interface MenuEntryProps {
	title: string;
	meals: Meal[];
}

export function MenuEntry({ title, meals }: MenuEntryProps) {
	return (
		<article className={styles.menuEntry}>
			<h3 className={styles.title}>{title}</h3>
			<ol>
				{meals.map((meal) => (
					<>
						<li>{meal.text}</li>
						{meal.variants?.map((variant) => (
							<ul>
								<li>{variant}</li>
							</ul>
						))}
					</>
				))}
			</ol>
		</article>
	);
}
