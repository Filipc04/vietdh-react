import type { DailyMenu } from '../../types/types';

export const dailyMeals: DailyMenu[] = [
	{
		day: 'Monday',
		meals: [
			{
				text: 'Kyckling schnitzel med stekt potatis, ärtor & bearnaisesås',
			},
			{
				text: 'Kyckling i rödcurry med blandade grönsaker & ris🌶️',
			},
			{
				text: 'Dagens små rätter (ris ingår)',
				variants: [
					'Wokad biff med bambuskott',
					'Friterad kyckling & sötsur sås',
				],
			},
		],
	},
	{
		day: 'Tuesday',
		meals: [
			{
				text: 'Räkor Pokébowl',
			},
			{
				text: 'Wokad kyckling med blandade grönsaker & ris',
			},
			{
				text: 'Wokad fläsk med grönsaker & ris🌶️🌶️',
			},
		],
	},
	{
		day: 'Wednesday',
		meals: [
			{
				text: 'Kyckling pokébowl',
			},
			{
				text: 'Dagens små rätter (ris ingår)',
				variants: [
					'Kycklingspett i jordnötsås',
					'Friterad kyckling med sötsursås',
				],
			},
			{
				text: 'Stekta äggnudlar med kyckling & blandade grönsaker',
			},
		],
	},
	{
		day: 'Thursday',
		meals: [
			{
				text: 'Fläskschnitzel med stekt potatis, bearnaisesås & ärtor',
			},
			{
				text: 'Kyckling i panangcurry paprika, lök & ris🌶️',
			},
			{
				text: 'Wokad biff med grönsaker i szechuansås🌶️🌶️',
			},
		],
	},
	{
		day: 'Friday',
		meals: [
			{
				text: 'Biff Pokébowl',
			},
			{
				text: 'Wokad kyckling med blandade grönsaker & ris',
			},
			{
				text: 'Kycklingspett i sötsurssås & ris',
			},
		],
	},
];
