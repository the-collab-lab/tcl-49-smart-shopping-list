export function FormInput({ label, id, ...otherProps }) {
	return (
		<div className="group flex justify-center py-4">
			<label className="font-inter font-semibold" htmlFor={id}>
				{label}
			</label>
			<input
				className="border-2 rounded ml-1 w-2/4 pl-2 italic"
				id={id}
				{...otherProps}
			/>
		</div>
	);
}
