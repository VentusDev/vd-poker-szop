import { v4 as uuidv4 } from 'uuid';

const aboutItems = [
	{
		label: 'lat na rynku',
		number: '5',
	},
	{
		label: 'sprzedanych egzemplarzy',
		number: '100k',
	},
];

const About = () => {
	return (
		<section id='about' className='section'>
			<div className='container'>
				<h2 className='headline-2 text-end my-5'>O Poker Szop</h2>
				<div className='glass-bg p-7 md:p-10'>
					<p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
						Pasję do Pokera nosimy w sobie od dziecka i postanowiliśmy podzielić
						się nią z Innymi. Nikomu nie zaszkodzi szybka rundka po obiedzie a
						nawet w przerwie przed zajęciami lub pracą. Nasz kreator umożliwia
						stworzenie upragionych wzorów. Planujemy także wdrożyć indywidualne
						grawery na żetonach. A teraz wybierz swoje ulubione przedmioty i leć
						na rundkę z rodziną i przyjaciółmi!
					</p>

					<div className='flex flex-wrap items-center gap-4 md:gap-7'>
						{aboutItems.map(({ label, number }) => (
							<div key={uuidv4()}>
								<div className='flex items-center md:mb-2'>
									<span className='text-2xl font-bold md:text-4xl'>
										{number}
									</span>
									<span className='text-red-600 font-semibold md:text-3xl'>
										+
									</span>
								</div>
								<p className='text-sm text-zinc-400'>{label}</p>
							</div>
						))}
						<img
							src='/img/logo_poker_szop2.svg'
							alt='Poker Szop Logo'
							className='ml-auto md:w-[420px]'
							height={130}
							width={280}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
