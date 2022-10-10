export function AddItem() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('it is working!!!');
	};
	return (
		<div>
			<h1>Smart shopping list</h1>

			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="items">Item name</label>
					<input type="text" />
				</div>
				<button type="submit">add item</button>
			</form>
		</div>
	);
}
