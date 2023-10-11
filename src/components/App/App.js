import "./App.css";
import "../../fonts/Fonts.css";
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
				<PrimaryButton text="Primary" />
				<br />
				<SecondaryButton text="Secondary" />
				<br />
				<TertiaryButton text="Tertiary" />
			</main>
		</div>
	);
}

export default App;
