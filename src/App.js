import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Bckgrnd from "./assets/bckgrnd.jpg";
class App extends React.Component {
	render() {
		return (
			<div
				className="App"
				style={{
					backgroundImage: `url(${Bckgrnd})`
				}}
			>
				<Header />
				<h1>My tasks</h1>
				<input
					placeholder="Ex: Write a new blog post"
					maxLength={80}
					type="text"
				/>
				<button>+</button>
			</div>
		);
	}
}

export default App;
