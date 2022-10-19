import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data }) {
	const [searchField, setSearchField] = useState('');
	// const [buttonPopUp, setButtonPopUp] = useState({
	// 	show: false,
	// 	id: null,
	// });

	// const handleDelete = (id) => {
	// 	setButtonPopUp({
	// 		show: true,
	// 		id,
	// 	});
	// };

	// const handleDeleteTrue = () => {
	// 	if (buttonPopUp.show && buttonPopUp.id) {
	// 		data.filter((item) => item.id !== buttonPopUp.id);
	// 		setButtonPopUp({
	// 			show: false,
	// 			id: null,
	// 		});
	// 	}
	// };

	// This will just hide the Confirmation Box when user clicks "No"/"Cancel"

	// const handleDeleteFalse = () => {
	// 	setButtonPopUp({
	// 		show: false,
	// 		id: null,
	// 	});
	// };

	const onSearchChange = (e) => {
		const { value } = e.target;
		setSearchField(value.toLocaleLowerCase());
	};

	// const handleTrigger = () => {
	// 	setButtonPopUp(!buttonPopUp);
	// };

	return (
		<>
			<div>
				<form>
					<label htmlFor="filter-items">Filter items</label>
					<input
						type="search"
						name="filter-items"
						id="filter-items"
						onChange={onSearchChange}
						placeholder="Start typing here..."
					/>
				</form>
			</div>

			<ul>
				{data
					.filter(({ name }) => name.toLocaleLowerCase().includes(searchField))
					.map(({ name, id }) => (
						<ListItem
							key={id}
							name={name}
							// trigger={buttonPopUp}
							// handleTrigger={handleTrigger}
						/>
					))}
			</ul>
		</>
	);
}
