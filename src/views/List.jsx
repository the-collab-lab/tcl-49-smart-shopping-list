import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data, listToken }) {
	const [searchField, setSearchField] = useState('');

	const onSearchChange = (e) => {
		const { value } = e.target;
		setSearchField(value.toLowerCase());
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

				{filteredLists && filteredLists.length > 0 ? (
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
				) : (
					<div>
						<p>Loading...</p>
					</div>
				)}
			</form>
		</>
	);
}
