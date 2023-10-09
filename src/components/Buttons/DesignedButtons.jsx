import "./DesignedButtons.css";

export function PrimaryButton({ text }) {
	return (
		<button className="primary-btn designed-btn">{text}</button>
	);
}

export function SecondaryButton({ text }) {
	return (
		<button className="secondary-btn designed-btn">{text}</button>
	);
}

export function TertiaryButton({ text }) {
	return (
		<button className="tertiary-btn designed-btn">{text}</button>
	);
}
