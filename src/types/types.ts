export interface Meal {
	text: string;
	variants?: string[];
}

export interface DailyMenu {
	day: string;
	meals: Meal[];
}

export interface DinnerMenu {
	mealCategory: string;
	meals: Meal[];
}