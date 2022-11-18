import { useState } from 'react';
import { ListItem } from '../components';
import ListPrompt from '../components/ListPrompt';
import { comparePurchaseUrgency } from '../api/firebase';

export function List({ data, listToken }) {
	const [searchField, setSearchField] = useState('');

	const onSearchChange = (e) => {
		const { value } = e.target;
		setSearchField(value.toLowerCase());
	};

	const filteredListItems = data.filter(({ name }) =>
		name.toLowerCase().includes(searchField),
	);

	const sortedList = comparePurchaseUrgency(data);

	return (
		<>
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
