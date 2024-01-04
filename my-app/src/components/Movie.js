import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ coverImg, summary, genres, title, year, id }) {
	return (
		<div>
			<h2>
				<Link to={`movie/${id}`}>{title}</Link>({year})
			</h2>
			<img src={coverImg} alt={title} />
			<p>{summary}</p>
			<ul>
				{genres.map((genre) => (
					<li key={genre}>{genre}</li>
				))}
			</ul>
			<hr />
		</div>
	);
}

Movie.propTypes = {
	id: propTypes.number.isRequired,
	coverImg: propTypes.string.isRequired,
	summary: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	year: propTypes.number.isRequired,
	genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
