import { useState } from 'react';
import { ListItem } from '../components';
import ListPrompt from '../components/ListPrompt';
// import { comparePurchaseUrgency } from '../api/firebase';

export function List({ data, listToken }) {
	const [searchField, setSearchField] = useState('');

	const onSearchChange = (e) => {
		const { value } = e.target;
		setSearchField(value.toLowerCase());
	};

	// const filteredListItems = sortedData.filter(({ name }) =>
	// 	name.toLowerCase().includes(searchField),
	// );

	const filteredListItems = data.filter(({ name }) =>
		name.toLowerCase().includes(searchField),
	);

	// const sortedData = comparePurchaseUrgency(data);

	return (
		<>
			{/* {sortedData.length ? ( */}
			{data.length ? (
				<div>
					<form>
						<label htmlFor="filter-items">Filter items</label>
						<input
							type="search"
							name="filter-items"
							id="filter-items"
							onChange={onSearchChange}
							value={searchField}
						/>
					</form>

					<ul>
						{filteredListItems.map(({ name, ...items }) => (
							<ListItem
								key={items.id}
								name={name}
								items={items}
								listToken={listToken}
								// urgency={items.urgency}
							/>
						))}
					</ul>
				</div>
			) : (
				<ListPrompt />
			)}
		</>
	);
}
