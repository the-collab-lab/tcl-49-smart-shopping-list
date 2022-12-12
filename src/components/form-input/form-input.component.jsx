export function FormInput({ label, id, ...otherProps }) {
	return (
		<div className="py-4">
			<label className="font-medium lg:block" htmlFor={id}>
				{label}
			</label>
			<input
				className="border-2 rounded w-full mt-3 py-2 px-4 lg:w-1/2"
				id={id}
				{...otherProps}
			/>
		</div>
	);
}
