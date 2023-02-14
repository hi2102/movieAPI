import Movie from './Movie';

export default async function Home() {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
	);
	const data = await res.json();
	const movies = data.results;
	return (
		<main>
			<h1 className='text-xl m-5'>
				<h2>영화 목록</h2>
			</h1>
			<div className='grid gap-16 grid-cols-fluid '>
				{movies.map((movie) => (
					<Movie
						key={movie.id}
						id={movie.id}
						title={movie.title}
						poster_path={movie.poster_path}
						release_date={movie.release_date}
					/>
				))}
			</div>
		</main>
	);
}
