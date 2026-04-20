import type { DinnerMenu } from '../../types/types';
/* import { GiChiliPepper } from "react-icons/gi"; Försök få att funka*/

export const dinnerMeals: DinnerMenu[] = [
	{
		mealCategory: 'Förrätter',
		meals: [
			{ text: 'Vårrullar med sötsursås (kött och grönsaker)', price: 59 },
			{ text: 'Vegetariska vårrullar', price: 59 },
		],
	},
	{
		mealCategory: 'Barnmeny',
		meals: [
			{ text: 'Friterad kyckling', price: 70 },
			{ text: 'Äggnudlar med kyckling', price: 70 },
			{ text: 'Kycklingvingar med pommes', price: 70 },
		],
	},
	{
		mealCategory: 'Vietnamesiskt - Nudlar',
		meals: [
			{ text: 'Phở bò (nudelsoppa med biff)', price: 120 },
			{ text: 'Phở gà (nudelsoppa med kyckling)', price: 120 },
			{ text: 'Phở bò & gà (nudelsoppa med biff och kyckling)', price: 120 },
			{ text: 'Bún chả nem (risnudlar med vårrullar)', price: 120 },
			{ text: 'Marinerad fläsk med risnudlar, sallader och sås', price: 120 },
			{ text: 'Marinerad biff med risnudlar, sallader och sås', price: 120 },
			{ text: 'Marinerad kyckling med risnudlar, sallader och sås', price: 120 },
		],
	},
	{
		mealCategory: 'Vietnamesiskt - Kött',
		meals: [
			{ text: 'Marinerad fläsk med risnudlar, sallader och sås', price: 120 },
			{ text: 'Marinerad biff med risnudlar, sallader och sås', price: 120 },
			{ text: 'Marinerad kyckling med risnudlar, sallader och sås', price: 120 },
		],
	},
	{
		mealCategory: 'Biff',
		meals: [
			{ text: 'Wokad biff med bambuskott', price: 120 },
			{ text: 'Wokad biff med blandade grönsaker', price: 120 },
			{ text: 'Wokad biff med grönsaker i szechuansås (stark)', price: 120 },
		],
	},
	{
		mealCategory: 'Kyckling',
		meals: [
			{ text: 'Wokad kyckling med bambuskott', price: 109 },
			{ text: 'Wokad kyckling med grönsaker', price: 109 },
			{ text: 'Wokad kyckling med grönsaker i szechuansås (stark)', price: 109 },
		],
	},
	
	{
		mealCategory: 'Fläsk',
		meals: [
			{ text: 'Wokat fläsk med grönsaker', price: 109 },
			{ text: 'Wokat fläsk med grönsaker i szechuansås (stark)', price: 109 },
		],
	},
	{
		mealCategory: 'Anka',
		meals: [
			{ text: 'Friterad anka med blandade grönsaker', price: 125 },
			{ text: 'Friterad anka med blandade grönsaker i szechuansås (stark)', price: 125 },
			{ text: 'Friterad anka med lök, ananas i sötsursås', price: 125 },
			{ text: 'Friterad anka i rödcurry med blandade grönsaker', price: 125 },
			{ text: 'Friterad anka i panangcurry med blandade grönsaker', price: 125 },
		],
	},
	{
		mealCategory: 'Räkor',
		meals: [
			{ text: 'Wokade räkor med blandade grönsaker', price: 119 },
			{
				text: 'Wokade räkor med blandade grönsaker i szechuansås (stark)', price: 119,
			},
		],
	},
	{
		mealCategory: 'Nudlar',
		meals: [
			{
				text: 'Wokade äggnudlar med kyckling & blandade grönsaker',
				price: 109,
			},
			{ text: 'Wokade äggnudlar med biff & blandade grönsaker', price: 119 },
			{ text: 'Wokade äggnudlar med räkor & blandade grönsaker', price: 119 },
			{
				text: 'Wokade äggnudlar med kyckling, biff samt räkor & blandade grönsaker',
				price: 119,
			},
		],
	},

	{
		mealCategory: 'Curry',
		meals: [
			{
				text: 'Kyckling i rödcurry med blandade grönsaker', price: 109
			},
			{
				text: 'Kyckling i panangcurry med lök, paprika & ananas', price: 109
			},
			{
				text: 'Räkor i panangcurry med lök, paprika & ananas', price: 119
			},
			{
				note: 'Räkor i rödcurry med blandade grönsaker', price: 119
			},
		],
	},
	
	{
		mealCategory: 'PadThai',
		meals: [
			{ text: 'Risnudlar med kyckling & blandade grönsaker', price: 109 },
			{ text: 'Risnudlar med räkor & blandade grönsaker', price: 119 },
			{
				text: 'Risnudlar med räkor, biff samt kyckling & blandade grönsaker',
				price: 119,
			}, 
		],
	},
	{
		mealCategory: 'Stekt ris',
		meals: [
			{ text: 'Stekt ris med kyckling & grönsaker', price: 109 },
			{ text: 'Stekt ris med räkor & grönsaker', price: 119 },
			{
				text: 'Stekt ris med kyckling, räkor samt biff & grönsaker',
				price: 119,
			},
		],
	},
	
	{
		mealCategory: 'Friterad',
		meals: [
			{ text: 'Kycklingspett i jordnötssås/sötsursås', price: 109 },
			{ text: 'Friterade kycklingvingar & pommes', price: 109 },
			{ text: 'Friterad kyckling med sötsursås/jordnötssås', price: 109 },
			{ text: 'Friterade räkor med sötsursås/jordnötssås', price: 119 },
		],
	},
	{
		mealCategory: 'Pokébowl',
		meals: [
			{ text: 'Kyckling pokébowl', price: 109 },
			{ text: 'Biff pokébowl', price: 119 },
			{ text: 'Räkpokébowl', price: 119 },
			{ text: '(innehåller gurka, paprika, rödlök, sjögrässallad, ingenfära, sojabönor, & sesamfrö (ägg, laktos))' },
		],
	},
	
	{
		mealCategory: 'Vegetariskt',
		meals: [
			{ text: 'Wokad tofu med blandade grönsaker', price: 99 },
			{ text: 'Wokade grönsaker', price: 99 },
			{ text: 'Vegetariska vårrullar, ris & sås samt sallader', price: 99 },
			{ text: 'Wokade äggnudlar med blandade grönsaker', price: 90 },
		],
	},
	{
		mealCategory: 'Efterrätt',
		meals: [
			{ text: 'Friterad banan med glass', price: 50 },
		],
	},
	{
		mealCategory: 'Tillbehör',
		meals: [
			{ text: 'Extra ris', price: 20 },
			{ text: 'Extra sås', price: 15 },
			{ text: 'Extra nudlar', price: 30 },
			{ text: 'Nudlar istället för ris', price: 20 },
		],
	},
];
