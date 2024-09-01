import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders the initial list of todos', () => {
	render(<TodoList />);
	const todoElements = screen.getAllByRole('listitem');
	expect(todoElements).toHaveLength(3);
});

test('allows the user to add a todo', () => {
	render(<TodoList />);
	fireEvent.change(screen.getByRole('textbox'), {
		target: { value: 'New Todo' },
	});
	fireEvent.click(screen.getByText(/add todo/i));
	expect(screen.getByText('New Todo')).toBeInTheDocument();
});
test('allows the user to toggle a todo', () => {
	render(<TodoList />);
	const todoElement = screen.getByText('Learn React');
	fireEvent.click(todoElement);
	expect(todoElement).toHaveStyle('text-decoration: line-through');
	fireEvent.click(todoElement);
	expect(todoElement).toHaveStyle('text-decoration: none');
});
test('allows the user to delete a todo', () => {
	render(<TodoList />);
	fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
	expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
