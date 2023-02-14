import Link from 'next/link';
import Image from 'next/image';

export default async function MovieDetail({ params }) {
	const { movie } = params;
	const imagePath = 'https://image.tmdb.org/t/p/original';
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
		{ next: { revalidate: 0 } }
	);
	const data = await res.json();

	return (
		<div>
			<div>
				<h2 className='text-2xl'>{data.title}</h2>
				<div className='text-lg'>{data.release_date}</div>
				<div>RunTime: {data.runtime} minutes</div>
				<div className='text-sm text-white bg-green-600 inline-block px-4 py-2 mt-2 rounded'>
					{data.status}
				</div>
				<hr className='my-10' />

				<div>
					<Image
						className='my-12 w-full rounded-2xl'
						unoptimized
						src={`${imagePath}${data.backdrop_path}`}
						width={800}
						height={800}
					/>
				</div>
				<hr className='my-10' />
				<h2>{data.overview}</h2>
				<div className='my-10'>
					<Link href={'/'}>
						<button className='text-sm text-white bg-gray-600 inline-block px-4 py-2 rounded'>
							go home
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
