import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import styles from '../css/Movie.module.css';

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	const getMovies = async () => {
		const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
		const json = await response.json();
		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className={styles.background}>
					<h1 id={styles.webTitle}>Theater</h1>
					<div>
						<div className={styles.movieList}>
							{movies.map((movie) => (
								<Movie
									key={movie.id}
									coverImg={movie.medium_cover_image}
									title={movie.title}
									summary={movie.summary}
									genres={movie.genres}
									year={movie.year}
									id={movie.id}
								/>
							))}
						</div>{' '}
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
