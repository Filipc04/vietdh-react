import type { Meal } from '../../types/types';
import styles from './MenuEntry.module.css';

interface MenuEntryProps {
	title: string;
	meals: Meal[];
}

export function MenuEntry({ title, meals }: MenuEntryProps) {
	return (
		<article className={styles.menuEntry}>
			<div className={styles.title}>{title}</div>
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
