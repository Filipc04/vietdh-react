export interface Meal {
	text: string;
	variants?: string[];
	price?: number;
	proteinSource?: string;
}

export interface DailyMenu {
	day: string;
	meals: Meal[] | string;
}

export interface DinnerMenu {
	mealCategory: string;
	meals: Meal[];
}
