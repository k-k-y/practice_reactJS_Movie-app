import styles from '../css/Details.module.css';

function MovieInfor({ infor }) {
	let inforStr = JSON.stringify(infor, null, 2);
	inforStr = inforStr.replace(/{/g, '').replace(/}/g, '').replace(/"/g, '').replace(/,/g, '');

	return (
		<div className={`${styles.background} ${styles.font}`}>
			<div className={styles.center}>
				<h1 className={styles.title}>
					{infor.title} - {infor.year}
				</h1>
				<h4 className={styles.subTitle}>Show Details</h4>
			</div>
			<hr />
			<pre className={styles.pre}>{inforStr}</pre>
		</div>
	);
}

export default MovieInfor;
