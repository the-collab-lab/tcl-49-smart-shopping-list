export function FormInput({ label, ...otherProps }) {
	return (
		<div className="group">
			<label htmlFor="itemName">{label}</label>
			<input {...otherProps} />
		</div>
	);
}
