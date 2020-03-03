import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Bckgrnd from "./assets/bckgrnd.jpg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function Todos({ todos, deleteTodo }) {
	// return (
	// 	<div className="list">
	// 		{todos.map((todo, i) => (
	// 			<div className="task">{todo} jiiui </div>
	// 		))}
	// 	</div>
	// );

	return (
		<List>
			{todos.map((todo, index) => (
				<ListItem key={index} dense button>
					<Checkbox tabIndex={-1} disableRipple />
					<ListItemText primary={todo} />
					<ListItemSecondaryAction>
						<IconButton
							aria-label="Delete"
							onClick={() => {
								deleteTodo(index);
							}}
						>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	);
}

function App() {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

	const handleInput = e => {
		const input = e.target.value;
		setTask(input);
		console.log(task);
	};
	const handleSubmit = e => {
		e.preventDefault();

		setTodos([...todos, task]);
		setTask("");
		console.log(todos);
	};
	const deleteTodo = todoIndex => {
		const newTodos = todos.filter((_, index) => index !== todoIndex);

		setTodos(newTodos);
	};
	return (
		<div
			className="App"
			style={{
				backgroundImage: `url(${Bckgrnd})`
			}}
		>
			<Header />
			<input
				placeholder="Write a Task"
				maxLength={80}
				type="text"
				className="input"
				onChange={handleInput}
			/>
			<button onClick={handleSubmit}>+</button>

			<Todos todos={todos} deleteTodo={deleteTodo} />
		</div>
	);
}

export default App;
