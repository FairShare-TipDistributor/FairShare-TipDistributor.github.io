// import "./DesignedButtons.css";
import "./DesignedButton.css";

export function PrimaryButton({ text, size, func }) {
	return (
		<button className="primary-btn" onClick={func}>
			{text}
		</button>
	);
}

export function SecondaryButton({ text, func }) {
	return (
		<button className="secondary-btn" onClick={func}>
			{text}
		</button>
	);
}

export function TertiaryButton({ text, func }) {
	return (
		<button className="tertiary-btn" onClick={func}>
			{text}
		</button>
	);
}
