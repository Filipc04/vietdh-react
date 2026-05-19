import type { DailyMenu } from '../../types/types';

export const dailyMeals: DailyMenu[] = [
	{
		day: 'Måndag',
		meals: [
			{
				text: 'Kyckling schnitzel med stekt potatis, bearnaisesås & ärtor',
			},
			{
				text: 'Hemmagjorda vårrullar med stekta äggnudlar & grönsaker',
			},
			{
				text: 'Kyckling rödcurry (lite stark)',
			},
		],
	},
	{
		day: 'Tisdag',
		meals: [
			{
				text: 'Bánh mì – vietnamesiskt baguette med grillat fläskkött, sallad & sås',
			},
			{
				text: 'Räkor pokébowl',
			},
			{
				text: 'Wokad fläsk med grönsaker & kokt ris (stark)',
			},
			{
				text: 'Wokad kyckling med blandade grönsaker & kokt ris',
			},
		],
	},
	{
		day: 'Onsdag',
		meals: [
			{
				text: 'Kyckling pokébowl',
			},
			{
				text: 'Dagens små rätter',
				variants: [
					'Wokad biff med blandade grönsaker',
					'Friterad kyckling & kokt ris',
				],
			},
			{
				text: 'Stekta äggnudlar med kyckling & blandade grönsaker',
			},
		],
	},
	{
		day: 'Torsdag',
		meals: [
			{
				text: 'Fläskschnitzel med stekt potatis, bearnaisesås & ärtor',
			},
			{
				text: 'Kyckling i panangcurry med paprika, lök & ris (lite stark)',
			},
			{
				text: 'Kycklingspett i sötsursås/jordnötssås & ris',
			},
		],
	},
	{
		day: 'Fredag',
		meals: [
			{
				text: 'Biff pokébowl',
			},
			{
				text: 'Kycklingspett i sötsursås eller jordnötssås & kokt ris',
			},
			{
				text: 'Panerad fisk med potatismos, ärtor & remouladsås',
			},
			{
				text: 'Wokad kyckling med blandade grönsaker & kokt ris',
			},
		],
	},
];
