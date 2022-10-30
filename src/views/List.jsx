import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data, listToken }) {
	const [searchField, setSearchField] = useState('');

	const onSearchChange = (e) => {
		const { value } = e.target;
		setSearchField(value.toLowerCase());
		console.log(value);
	};

	const filteredLists = data.filter(({ name }) =>
		name.toLowerCase().includes(searchField),
	);

	return (
		<>
			<form>
				<label htmlFor="filter-items">Filter items</label>
				<input
					type="search"
					name="filter-items"
					id="filter-items"
					onChange={onSearchChange}
					value={searchField}
				/>
				<ul>
					{filteredLists.map(({ name, ...items }) => (
						<ListItem
							key={items.id}
							name={name}
							items={items}
							listToken={listToken}
						/>
					))}
				</ul>
			</form>
		</>
	);
}
