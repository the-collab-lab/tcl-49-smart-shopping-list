export function FormInput({ label, id, ...otherProps }) {
	return (
		<div className="group flex justify-center py-4">
			<label htmlFor={id}>{label}</label>
			<input className="border-2 rounded ml-1 w-2/4" id={id} {...otherProps} />
		</div>
	);
}
