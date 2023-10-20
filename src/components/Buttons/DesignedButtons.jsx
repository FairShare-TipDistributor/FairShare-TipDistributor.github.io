// import "./DesignedButtons.css";
import "./DesignedButton.css";

export function PrimaryButton({ text }) {
	return <button className="primary-btn">{text}</button>;
}

export function SecondaryButton({ text }) {
	return <button className="secondary-btn">{text}</button>;
}

export function TertiaryButton({ text }) {
	return <button className="tertiary-btn">{text}</button>;
}
