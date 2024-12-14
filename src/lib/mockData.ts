import { Product } from '@/types/product';

export const PRODUCTS_DATA: Product[] = [
	{
		id: '1',
		price: 70,
		name: 'zestaw SMALL',
		category: 'zestawy',
		imgs: [
			'/img/products/zestaws.jpg',
			'/img/products/kosci_szare.png',
			'/img/products/zetony_czerwone.png',
			'/img/products/zetony_fioletowe.png',
			'/img/products/zetony_niebieskie.png',
			'/img/products/zetony_pomaranczowe.png',
			'/img/products/zetony_szare.png',
			'/img/products/zetony_zielone.png',
			'/img/products/zetony_zolte.png'
			],
		desc: 'Pomniejszony zestaw kostek i żetonów do gry. Talię własnych kart możesz zaprojektować sobie samodzielnie w naszym kreatorze!',
		list: [
			'6 kostek - kolor dobierany losowo',
			'150 szarych żetonów',
			'100 czerwonych żetonów',
			'100 zielonych żetonów',
			'50 niebieskich żetonów',
			'50 pomarańczowych żetonów',
			'25 żółtych żetonów',
			'25 fioletowych żetonów',
		],
	},
	{
		id: '2',
		price: 230,
		name: 'zestaw MEDIUM',
		category: 'zestawy',
		imgs: [
			'/img/products/zestawm.jpg',
			'/img/products/kosci_szare.png',
			'/img/products/zetony_czerwone.png',
			'/img/products/zetony_fioletowe.png',
			'/img/products/zetony_niebieskie.png',
			'/img/products/zetony_pomaranczowe.png',
			'/img/products/zetony_szare.png',
			'/img/products/zetony_zielone.png',
			'/img/products/zetony_zolte.png'
			],
		desc: 'Przy żadnej rozgrywce nie powinno zabraknąć sukna do gry oraz zapasowych kart i my je zapewniamy! Pamiętaj, że oprócz naszych standardowych wzorów możesz również skorzystać z kreatora kart. Powodzenia!',
		list: [
			'2 + 1 talie kart po 54 sztuki',
			'12 kostek - kolor dobierany losowo',
			'150 szarych żetonów',
			'100 czerwonych żetonów',
			'100 zielonych żetonów',
			'50 niebieskich żetonów',
			'50 pomarańczowych żetonów',
			'25 żółtych żetonów',
			'25 fioletowych żetonów',
			'zielone sukno do gry',
		],
	},
	{
		id: '3',
		price: 400,
		name: 'zestaw BIG',
		category: 'zestawy',
		imgs: [
			'/img/products/zestawb.jpg',
			'/img/products/kosci_szare.png',
			'/img/products/zetony_czerwone.png',
			'/img/products/zetony_fioletowe.png',
			'/img/products/zetony_niebieskie.png',
			'/img/products/zetony_pomaranczowe.png',
			'/img/products/zetony_szare.png',
			'/img/products/zetony_zielone.png',
			'/img/products/zetony_zolte.png'
			],
		desc: 'A może tak do zestawu dorzucić ekskluzywną walizkę zamykaną na kluczyk? Już nikt więcej nieproszony nie sięgnie po Twój zestaw. Możesz czuć się bezpiecznie! W żadnym profesjonalnym zestawie nie powinno też zabraknąć dealera i blinda. Dobrze o tym wiemy, więc będąc posiadaczem BIG już nie musisz się tym martwić.',
		list: [
			'walizka',
			'1 kluczyk',
			'2 talie kart po 54 sztuki',
			'1 dealer',
			'1 big blind',
			'1 small blind',
			'12 kostek - kolor dobierany losowo',
			'150 szarych żetonów',
			'100 czerwonych żetonów',
			'100 zielonych żetonów',
			'50 niebieskich żetonów',
			'50 pomarańczowych żetonów',
			'25 żółtych żetonów',
			'25 fioletowych żetonów',
			'zielone sukno do gry',
		],
	},
	{
		id: '4',
		price: 60,
		name: 'karty biało-czerwone',
		category: 'karty',
		desc: 'Własnoręcznie zdobione i farbowane. Ich jakość wykonania pozwala na długotrwałe użytkowanie. Są odporne na warunki atmosferyczne. ',
		imgs: ['/img/products/karty_bialo_czerwone.png']
	},
	{
		id: '5',
		price: 60,
		name: 'karty biało-niebieskie',
		category: 'karty',
		desc: 'Własnoręcznie zdobione i farbowane. Ich jakość wykonania pozwala na długotrwałe użytkowanie. Są odporne na warunki atmosferyczne. ',
		imgs: ['/img/products/karty_bialo_niebieskie.png']
	},
	{
		id: '6',
		price: 60,
		name: 'karty biało-pomarańczowe',
		category: 'karty',
		desc: 'Własnoręcznie zdobione i farbowane. Ich jakość wykonania pozwala na długotrwałe użytkowanie. Są odporne na warunki atmosferyczne. ',
		imgs: ['/img/products/karty_bialo_pomaranczowe.png']
	},
	{
		id: '7',
		price: 60,
		name: 'karty biało-zielonee',
		category: 'karty',
		desc: 'Własnoręcznie zdobione i farbowane. Ich jakość wykonania pozwala na długotrwałe użytkowanie. Są odporne na warunki atmosferyczne. ',
		imgs: ['/img/products/karty_bialo_zielone.png']
	},
	{
		id: '8',
		price: 60,
		name: 'karty czerwono-niebieskie',
		category: 'karty',
		desc: 'Własnoręcznie zdobione i farbowane. Ich jakość wykonania pozwala na długotrwałe użytkowanie. Są odporne na warunki atmosferyczne. ',
		imgs: ['/img/products/karty_czerwono_niebieskie.png']
	},
	{
		id: '9',
		price: 60,
		name: 'karty fioletowo-zielone',
		category: 'karty',
		desc: 'Własnoręcznie zdobione i farbowane. Ich jakość wykonania pozwala na długotrwałe użytkowanie. Są odporne na warunki atmosferyczne. ',
		imgs: ['/img/products/karty_fiolet_zielen.png']
	},
	{
		id: '10',
		price: 60,
		name: 'karty niebiesko-złote',
		category: 'karty',
		desc: 'Własnoręcznie zdobione i farbowane. Ich jakość wykonania pozwala na długotrwałe użytkowanie. Są odporne na warunki atmosferyczne. ',
		imgs: ['/img/products/karty_granatowo_zlote.png']
	},
	{
		id: '11',
		price: 60,
		name: 'karty zielono-złote',
		category: 'karty',
		desc: 'Własnoręcznie zdobione i farbowane. Ich jakość wykonania pozwala na długotrwałe użytkowanie. Są odporne na warunki atmosferyczne. ',
		imgs: ['/img/products/karty_zielono_zlote.png']
	},
	{
		id: '12',
		price: 60,
		name: 'karty złoto-białe',
		category: 'karty',
		desc: 'Własnoręcznie zdobione i farbowane. Ich jakość wykonania pozwala na długotrwałe użytkowanie. Są odporne na warunki atmosferyczne. ',
		imgs: ['/img/products/karty_zloto_biale.png']
	},
	{
		id: '13',
		price: 60,
		name: 'karty biało-złote',
		category: 'karty',
		desc: 'Własnoręcznie zdobione i farbowane. Ich jakość wykonania pozwala na długotrwałe użytkowanie. Są odporne na warunki atmosferyczne. ',
		imgs: ['/img/products/karty_bialo_zlote.png']
	},
	{
		id: '14',
		price: 60,
		name: 'karty czarno-złote',
		category: 'karty',
		desc: 'Własnoręcznie zdobione i farbowane. Ich jakość wykonania pozwala na długotrwałe użytkowanie. Są odporne na warunki atmosferyczne. ',
		imgs: ['/img/products/karty_czarno_zlote.png']
	},
	{
		id: '15',
		price: 30,
		name: 'kostki fioletowe',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Imitacja szkła. Świetnie trzymają się dłoni. Zestaw zawiera 6 egzemplarzy. ',
		imgs: ['/img/products/kosci_fioletowe.png']
	},
	{
		id: '16',
		price: 30,
		name: 'kostki niebieskie',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Imitacja szkła. Świetnie trzymają się dłoni. Zestaw zawiera 6 egzemplarzy. ',
		imgs: ['/img/products/kosci_niebieskie.png']
	},
	{
		id: '17',
		price: 30,
		name: 'kostki pomarańczowe',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Imitacja szkła. Świetnie trzymają się dłoni. Zestaw zawiera 6 egzemplarzy. ',
		imgs: ['/img/products/kosci_pomaranczowe.png']
	},
	{
		id: '18',
		price: 30,
		name: 'kostki różowe',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Imitacja szkła. Świetnie trzymają się dłoni. Zestaw zawiera 6 egzemplarzy. ',
		imgs: ['/img/products/kosci_rozowe.png']
	},
	{
		id: '19',
		price: 30,
		name: 'kostki szare',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Imitacja szkła. Świetnie trzymają się dłoni. Zestaw zawiera 6 egzemplarzy. ',
		imgs: ['/img/products/kosci_szare.png']
	},
	{
		id: '20',
		price: 30,
		name: 'kostki zielone',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Imitacja szkła. Świetnie trzymają się dłoni. Zestaw zawiera 6 egzemplarzy. ',
		imgs: ['/img/products/kosci_zielone.png']
	},
	{
		id: '21',
		price: 30,
		name: 'kostki żółte',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Imitacja szkła. Świetnie trzymają się dłoni. Zestaw zawiera 6 egzemplarzy. ',
		imgs: ['/img/products/kosci_zolte.png']
	},
	{
		id: '22',
		price: 30,
		name: 'kostki granatowe',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Imitacja szkła. Świetnie trzymają się dłoni. Zestaw zawiera 6 egzemplarzy. ',
		imgs: ['/img/products/kosci_ciemno_niebieskie.png']
	},
	{
		id: '23',
		price: 30,
		name: 'kostki czerwone',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Imitacja szkła. Świetnie trzymają się dłoni. Zestaw zawiera 6 egzemplarzy. ',
		imgs: ['/img/products/kosci_czerwone.png']
	},
	{
		id: '24',
		price: 10,
		name: 'żetony niebieskie',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Zestaw zawiera 10 sztuk. ',
		imgs: ['/img/products/zetony_niebieskie.png']
	},
	{
		id: '25',
		price: 10,
		name: 'żetony pomarańczowe',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Zestaw zawiera 10 sztuk. ',
		imgs: ['/img/products/zetony_pomaranczowe.png']
	},
	{
		id: '26',
		price: 10,
		name: 'żetony szare',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Zestaw zawiera 10 sztuk. ',
		imgs: ['/img/products/zetony_szare.png']
	},
	{
		id: '27',
		price: 10,
		name: 'żetony zielone',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Zestaw zawiera 10 sztuk. ',
		imgs: ['/img/products/zetony_zielone.png']
	},
	{
		id: '28',
		price: 10,
		name: 'żetony żółte',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Zestaw zawiera 10 sztuk. ',
		imgs: ['/img/products/zetony_zolte.png']
	},
	{
		id: '29',
		price: 10,
		name: 'żetony czerwone',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Zestaw zawiera 10 sztuk. ',
		imgs: ['/img/products/zetony_czerwone.png']
	},
	{
		id: '30',
		price: 10,
		name: 'żetony fioletowe',
		category: 'akcesoria',
		desc: 'Wykonane z najtrwalszego materiału. Zestaw zawiera 10 sztuk. ',
		imgs: ['/img/products/zetony_fioletowe.png']
	},
];
