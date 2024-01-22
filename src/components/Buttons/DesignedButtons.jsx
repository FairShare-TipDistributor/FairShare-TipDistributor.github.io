// import "./DesignedButtons.css";
import "./DesignedButton.css";

export function PrimaryButton({ text, width, func }) {
	return (
		<button
			className="primary-btn"
			onClick={func}
			style={{ width: width }}
		>
			{text}
		</button>
	);
}

export function SecondaryButton({ text, width, func }) {
	return (
		<button
			className="secondary-btn"
			onClick={func}
			style={{ width: width }}
		>
			{text}
		</button>
	);
}

export function TertiaryButton({ text, width, func }) {
	return (
		<button
			className="tertiary-btn"
			onClick={func}
			style={{ width: width }}
		>
			{text}
		</button>
	);
}
