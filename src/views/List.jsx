import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data }) {
	const [searchField, setSearchField] = useState('');
	const [buttonPopUp, setButtonPopUp] = useState(false);

	const onSearchChange = (e) => {
		const { value } = e.target;
		console.log(value);
		setSearchField(value.toLocaleLowerCase());
	};

	return (
		<>
			{/* Add a form */}
			<div>
				<form>
					<label htmlFor="filter-items">Filter items</label>
					<input
						type="text"
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
							trigger={buttonPopUp}
							handleTrigger={setButtonPopUp}
						/>
					))}
			</ul>
		</>
	);
}
