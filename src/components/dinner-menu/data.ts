import type { DinnerMenu } from '../../types/types';
/* import { GiChiliPepper } from "react-icons/gi"; Försök få att funka*/

export const dinnerMeals: DinnerMenu[] = [
	{
		mealCategory: 'Barnmeny',
		meals: [
			{ text: 'Friterad Kyckling', price: 70 },
			{ text: 'Äggnudlar med kyckling', price: 70 },
			{ text: 'Kycklingvingar med pommes', price: 70 },
		],
	},
	{
		mealCategory: 'Kyckling',
		meals: [
			{ text: 'Wokad kyckling med bambuskott', price: 105 },
			{ text: 'Wokad kyckling med grönsaker', price: 105 },
			{ text: 'Wokad kyckling med grönsaker i szechuansås🌶️🌶️', price: 105 },
			{ text: 'Kyckling pokébowl', price: 105 },
		],
	},
	{
		mealCategory: 'Biff',
		meals: [
			{ text: 'Wokad biff med bambuskott', price: 115 },
			{ text: 'Wokad biff med blandade grönsaker', price: 115 },
			{ text: 'Wokad biff med grönsaker i szechuansås🌶️🌶️', price: 115 },
			{ text: 'Biff pokébowl', price: 115 },
		],
	},
	{
		mealCategory: 'Fläsk',
		meals: [
			{ text: 'Wokad fläsk med grönsaker', price: 105 },
			{ text: 'Wokad fläsk med grönsaker i szechuansås🌶️🌶️', price: 105 },
		],
	},
	{
		mealCategory: 'Anka',
		meals: [
			{ text: 'Friterad anka med blandade grönsaker', price: 119 },
			{
				text: 'Friterad anka med blandade grönsaker i szechuansås🌶️🌶️',
				price: 119,
			},
			{ text: 'Friterad anka med lök, ananas i sötsursås', price: 119 },
		],
	},
	{
		mealCategory: 'Räkor',
		meals: [
			{ text: 'Wokade räkor med blandade grönsaker', price: 115 },
			{
				text: 'Wokade räkor med blandade grönsaker i szechuansås🌶️🌶️',
				price: 115,
			},
			{ text: 'Räkor pokébowl', price: 115 },
		],
	},
	{
		mealCategory: 'Nudlar',
		meals: [
			{
				text: 'Wokade äggnudlar med kyckling & blandade grönsaker',
				price: 100,
			},
			{ text: 'Wokade äggnudlar med biff & blandade grönsaker', price: 110 },
			{ text: 'Wokade äggnudlar med räkor & blandade grönsaker', price: 110 },
			{
				text: 'Wokade äggnudlar med kyckling, biff samt räkor & blandade grönsaker',
				price: 110,
			},
		],
	},
	{
		mealCategory: 'Stekt ris',
		meals: [
			{ text: 'Stekt ris med kyckling & grönsaker', price: 105 },
			{ text: 'Stekt ris med biff & grönsaker', price: 115 },
			{ text: 'Stekt ris med räkor & grönsaker', price: 115 },
			{
				text: 'Stekt ris med kyckling, räkor samt biff & grönsaker',
				price: 115,
			},
		],
	},
	{
		mealCategory: 'PadThai🌶️',
		meals: [
			{ text: 'Risnudlar med kyckling & blandade grönsaker', price: 105 },
			{ text: 'Risnudlar med räkor & blandade grönsaker', price: 115 },
			{
				text: 'Risnudlar med räkor, biff samt kyckling & blandade grönsaker',
				price: 115,
			},
			{ text: 'Risnudlar med biff & blandade grönsaker', price: 115 },
		],
	},
	{
		mealCategory: 'Friterad',
		meals: [
			{ text: 'Friterad kycklingvingar & pommes', price: 105 },
			{ text: 'Friterad kyckling med sötsursås/jordnötssås', price: 105 },
			{ text: 'Friterad räkor med sötsursås/jordnötssås', price: 115 },
			{ text: 'Kycklingspett i jordnötssås/sötsursås', price: 105 },
		],
	},
	{
		mealCategory: 'Små Rätter',
		meals: [
			{
				text: 'Fyra små rätter',
				price: 125,
				variants: [
					'Wokad biff med bambuskott',
					'Friterad räkor med sötsursås',
					'Friterad kyckling med sötsursås',
					'Kyckling i gulcurry',
				],
			},
			{
				text: 'Tre små rätter',
				price: 115,
				variants: [
					'Wokad biff med bambuskott',
					'Friterad räkor & sötsursås',
					'Kycklingspett i jordnötssås',
				],
			},
		],
	},
	{
		mealCategory: 'Vegetariskt',
		meals: [
			{ text: 'Wokad tofu med blandade grönsaker i szechuansås🌶️🌶️', price: 99 },
			{ text: 'Wokad tofu med blandade grönsaker', price: 99 },
			{ text: 'Vegetariska vårrullar, ris & sås samt sallader', price: 99 },
			{ text: 'Wokade äggnudlar med blandade grönsaker', price: 90 },
		],
	},
	{
		mealCategory: 'Curry',
		meals: [
			{
				text: 'Rödcurry med blandade grönsaker (Kyckling / räkor / tofu eller anka)🌶️',
			},
			{
				text: 'Gulcurry med blandade grönsaker (Kyckling / räkor eller tofu)🌶️',
			},
			{
				text: 'Panangcurry med lök, paprika & ananas (Kyckling / räkor / anka eller tofu) PRIIIIIIS',
			},
		],
	},
];
