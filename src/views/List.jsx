import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data }) {
	// const [searchField, setSearchField] = useState('');
	const [buttonPopUp, setButtonPopUp] = useState(false);

	const handleFilterItems = (event) => {
		event.preventDefault();
		console.log('This works!');
	};

	return (
		<>
			{/* Add a form */}
			<div>
				<form onSubmit={handleFilterItems}>
					<label htmlFor="filter-items">Filter items</label>
					<input
						type="text"
						name="filter-items"
						id="filter-items"
						placeholder="Start typing here..."
					/>
				</form>
			</div>

			<ul>
				{data.map(({ name, id }) => (
					<ListItem
						key={id}
						name={name}
						trigger={buttonPopUp}
						handleTrigger={setButtonPopUp}
					/>
				))}
			</ul>
		</>
	);
}
