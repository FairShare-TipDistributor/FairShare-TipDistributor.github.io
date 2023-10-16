import "./App.css";
import {
	PrimaryButton,
	SecondaryButton,
	TertiaryButton,
} from "../Buttons/DesignedButtons";

function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
			<main>
				<p>PrimaryButton</p>
				<PrimaryButton text="Button" />

				<p>SecondaryButton</p>
				<SecondaryButton text="Button" />

				<p>TertiaryButton</p>
				<TertiaryButton text="Button" />
			</main>
		</div>
	);
}

export default App;
