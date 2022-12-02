export function FormInput({ label, id, ...otherProps }) {
	return (
		<div className="group flex py-4">
			<label className="font-medium" htmlFor={id}>
				{label}
			</label>
			<input
				className="border-2 rounded ml-3 w-2/4 pl-2"
				id={id}
				{...otherProps}
			/>
		</div>
	);
}
