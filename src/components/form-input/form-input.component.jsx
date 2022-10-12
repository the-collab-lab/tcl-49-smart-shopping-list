export function FormInput({ label, ...otherProps }) {
	return (
		<div className="group">
			<label htmlFor="item">{label}</label>
			<input {...otherProps} />
		</div>
	);
}
