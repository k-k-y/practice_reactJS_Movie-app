import { useState, useEffect } from 'react';

function Hello() {
	useEffect(() => {
		console.log('HI :)');
		return () => {
			console.log('BYE :(');
		};
	}, []);

	return <h1>Hello</h1>;
}
function App() {
	const [showing, setShowing] = useState(false);

	function onClick() {
		setShowing((prev) => !prev);
	}
	return (
		<div>
			<button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
			{showing ? <Hello /> : null}
		</div>
	);
}

export default App;
