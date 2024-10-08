import React from 'react';

function TodoList() {
	const [todos, setTodos] = useState([
		{ id: 1, text: 'Learn React', completed: false },
		{ id: 2, text: 'Build a Todo List', completed: false },
		{ id: 3, text: 'Test the Todo List', completed: false },
	]);

	const addTodo = (text) => {
		setTodos([...todos, { id: Date.now(), text, completed: false }]);
	};

	const toggleTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<h1>Todo List</h1>
			<AddTodoForm addTodo={addTodo} />
			<ul>
				{todos.map((todo) => (
					<li
						key={todo.id}
						onClick={() => toggleTodo(todo.id)}
						style={{
							textDecoration: todo.completed ? 'line-through' : 'none',
							cursor: 'pointer',
						}}>
						{todo.text}
						<button onClick={() => deleteTodo(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

function AddTodoForm({ addTodo }) {
	const [text, setText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text) return;
		addTodo(text);
		setText('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button type='submit'>Add Todo</button>
		</form>
	);
}

export default TodoList;
