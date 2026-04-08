import type { DailyMenu } from '../../types/types';

export const dailyMealsEven: DailyMenu[] = [
	{
		day: 'Måndag',
		meals: [
			{
				text: 'Kyckling schnitzel med stekt potatis, ärtor & bearnaisesås',
			},
			{
				text: 'Kyckling i rödcurry med blandade grönsaker & ris',
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
		day: 'Tisdag',
		meals: [
			{
				text: 'Räkor pokébowl',
			},
			{
				text: 'Wokad kyckling med blandade grönsaker & ris',
			},
			{
				text: 'Wokat fläsk med grönsaker & ris',
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
				text: 'Dagens små rätter (ris ingår)',
				variants: [
					'Kycklingspett i jordnötssås',
					'Friterad kyckling med sötsursås',
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
				text: 'Kyckling i panangcurry med paprika, lök & ris',
			},
			{
				text: 'Wokad biff med grönsaker i szechuansås',
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
				text: 'Wokad kyckling med blandade grönsaker & ris',
			},
			{
				text: 'Kycklingspett i sötsursås & ris',
			},
		],
	},
];

export const dailyMealsOdd: DailyMenu[] = [
	{
		day: 'Måndag',
		meals: [
			{
				text: 'Stekta äggnudlar med hemmagjorda vårrullar & sötsursås',
			},
			{
				text: 'Kyckling i rödcurry med blandade grönsaker & ris',
			},
			{
				text: 'Dagens små rätter (ris ingår)',
				variants: ['Kycklingspett i jordnötssås', 'Kyckling i rödcurry'],
			},
		],
	},
	{
		day: 'Tisdag',
		meals: [
			{
				text: 'Panerad fisk med potatismos, ärtor & sås',
			},
			{
				text: 'Wokat fläsk med blandade grönsaker i szechuansås & ris',
			},
			{
				text: 'Wokad kyckling med blandade grönsaker i sötsurssås',
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
				text: 'Dagens små rätter (ris ingår)',
				variants: [
					'Wokad biff med blandade grönsaker',
					'Friterad kyckling med sötsursås',
				],
			},
			{
				text: 'Wokad kyckling med blandade grönsaker i szechuansås & ris',
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
				text: 'Kyckling i panangcurry med paprika, lök & ris',
			},
			{
				text: 'Wokad kyckling med grönsaker & ris',
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
				text: 'Padthai',
				variants: ['Stekt kyckling med risnudlar och grönsaker i padthaisås'],
			},
			{
				text: 'Kycklingspett i jordnötssås & ris',
			},
		],
	},
];
