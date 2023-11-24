export default function InputTipPool({
	totalTipPool,
	setTotalTipPool,
}) {
	const adjustTotalTipPool = (e) => {
		e.preventDefault();
		const inputValue = e.target.value;

		// Regex to allow only valid numbers with up to 2 decimal places
		const validInput = /^[0-9]+(\.[0-9]{1,2})?$/;

		if (validInput.test(inputValue)) {
			setTotalTipPool(Number(inputValue));
		}
	};

	return (
		<>
			<label htmlFor="total-tip-pool">Total Tip Pool: </label>
			<input
				type="number"
				name="total-tip-pool"
				id="total-tip-pool"
				value={totalTipPool}
				onChange={adjustTotalTipPool}
				step="0.01"
			/>
		</>
	);
}
