import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieInfor from '../components/MovieInfor';
function Detail() {
	const [loading, setLoading] = useState(true);
	const [movieInfor, setMovieInfor] = useState('');
	const { id } = useParams();

	const getDetails = async () => {
		const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
		console.log(json.data.movie);
		setLoading(false);
		setMovieInfor(json.data.movie);
	};

	useEffect(() => {
		getDetails();
	}, []);

	return <div>{loading ? <h1>Loading...</h1> : <MovieInfor infor={movieInfor} />}</div>;
}

export default Detail;
