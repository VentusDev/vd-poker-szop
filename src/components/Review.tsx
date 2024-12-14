import { v4 as uuidv4 } from 'uuid';
import ReviewCard from './ReviewCard';
import { Carousel } from './CarouselElement';

const reviewList = [
	{
		imgSrc: 'jadzia.svg',
		name: 'Jadzia',
		content:
			'Gdy zamówiłam Zestaw Niespodzianka to się zaskoczyłam. Był wybrakowany. Ale szybko dosłali kostki do gry, za które przecież też zapłaciłam. Nie mam niczego do zarzucenia.',
		company: 'osoba prywatna',
	},
	{
		imgSrc: 'lorenzo.svg',
		name: 'Lorenzo',
		content:
			'Dobra firma, często zamawiamy zestawy do gry na naszych integracjach firmowych.',
		company: 'Lorenzo i spółka',
	},
	{
		imgSrc: 'mati.svg',
		name: 'Mati',
		content: 'Lubię jak mają promki. Wtedy się opyla.',
		company: 'Mati',
	},
	{
		imgSrc: 'henryk.svg',
		name: 'Henryk Henryk',
		content: 'Zaprojekotwałem u nich własne karty i są boskie.',
		company: 'Henrykowo',
	},
];

const Review = () => {
	return (
		<section className='section overflow-hidden min-h-[700px] flex flex-col justify-center' id='reviews'>
			<div className='container mx-auto'>
				<h1 className='headline-2 mb-5 text-right'>opinie</h1>
				<Carousel
					arrayLength={reviewList.length}
					elements={reviewList.map(({ imgSrc, company, content, name }) => (
						<div
							key={uuidv4()}
							className='flex  py-5 justify-center relative carousel-item flex-shrink-0 w-full max-h-[500px]'
						>
							<ReviewCard
								imgSrc={imgSrc}
								company={company}
								content={content}
								name={name}
							/>
						</div>
					))}
					autoplayInterval={6500}
				/>
			</div>
		</section>
	);
};

export default Review;
