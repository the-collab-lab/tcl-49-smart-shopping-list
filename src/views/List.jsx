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
				<ul>
					{filteredLists.map(({ name, ...others }) => (
						<ListItem
							key={others.id}
							name={name}
							item={others}
							listToken={listToken}
						/>
					))}
				</ul>
			</form>
		</>
	);
}
