import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Bckgrnd from "./assets/bckgrnd.jpg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";

function Todos({ todos }) {
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
				<ListItem key={index.toString()} dense button>
					<Checkbox tabIndex={-1} disableRipple />
					<ListItemText primary={todo} />
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

			<Todos todos={todos} />
		</div>
	);
}

export default App;
