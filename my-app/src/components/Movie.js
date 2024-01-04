import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../css/Movie.module.css';

function Movie({ coverImg, summary, genres, title, year, id }) {
	return (
		<div className={styles.movieContainer}>
			<img src={coverImg} alt={title} className={styles.img} />
			<div className={styles.text}>
				<h3 id={styles.title}>
					<Link to={`movie/${id}`} id={styles.link}>
						{title}
					</Link>
				</h3>
				<span>{year}</span>
				<p>
					{summary !== '' ? <strong>Summary - </strong> : null}
					{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}
				</p>
				<strong>Genre - </strong>
				{genres.map((genre) => (
					<span key={genre}> {genre} </span>
				))}
			</div>
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
