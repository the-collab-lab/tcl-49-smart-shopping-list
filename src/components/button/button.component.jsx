export function Button({ children }) {
	return (
		<>
			<button className="bg-green-600 py-2 px-3 rounded-full text-white shadow-md hover:text-green-600 hover:bg-transparent hover:border-solid hover:border-2 hover:font-semibold">
				{children}
			</button>
		</>
	);
}
