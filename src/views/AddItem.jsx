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

				<h3>how soon will you buy this again?</h3>
				<div></div>
				<button type="submit">add item</button>
			</form>
		</div>
	);
}
