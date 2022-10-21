export function FormInput({ label, id, ...otherProps }) {
	return (
		<div className="group">
			<label htmlFor={id}>{label}</label>
			<input id={id} {...otherProps} />
		</div>
	);
}
