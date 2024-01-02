import { useState } from 'react';

function TodoList() {
	const [todo, setTodo] = useState('');
	const [todoArray, setTodoArray] = useState([]);

	function onChange(event) {
		setTodo(event.target.value);
	}
	function onSubmit(event) {
		event.preventDefault();
		if (todo === '') {
			return;
		}
		setTodoArray((currentArray) => [...currentArray, todo]);
		setTodo('');
		console.log(todoArray);
	}

	return (
		<div>
			<h1>My To Dos ({todoArray.length})</h1>
			<form onSubmit={onSubmit}>
				<input value={todo} onChange={onChange} type="text" placeholder="Write Your To Do..." />
				<hr />
				<ul>
					{todoArray.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</form>
		</div>
	);
}

export default TodoList;
