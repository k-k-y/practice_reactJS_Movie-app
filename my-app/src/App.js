import { useState, useEffect } from 'react';

function App() {
	const [counter, setCounter] = useState(0);
	const [keyword, setKeyword] = useState('');

	function onClick() {
		setCounter((prev) => prev + 1);
	}

	function onChange(event) {
		setKeyword(event.target.value);
	}
	useEffect(() => {
		if (keyword !== '') {
			console.log('I run when keyword changed');
		}
	}, [keyword]);

	useEffect(() => {
		console.log('I run only once');
	}, []);

	useEffect(() => {
		if (counter !== 0) {
			console.log('I run when counter changed');
		}
	}, [counter]);
	return (
		<div>
			<input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
			<h1>count: {counter}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
}

export default App;
