import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Detail() {
	const [loading, setLoading] = useState(true);
	const [movieInfor, setMovieInfor] = useState('');
	const { id } = useParams();

	const getDetails = async () => {
		const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
		const str = JSON.stringify(
			json.data.movie,
			['genres', 'id', 'like_count', 'rating', 'runtime', 'title', 'url', 'year'],
			4
		);
		console.log(str);
		setMovieInfor(str);
		setLoading(false);
	};

	useEffect(() => {
		getDetails();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<h3>Showing details</h3>
					<pre>{movieInfor}</pre>
				</div>
			)}
		</div>
	);
}

export default Detail;
