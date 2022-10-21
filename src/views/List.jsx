import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data }) {
	const [searchField, setSearchField] = useState('');

	const onSearchChange = (e) => {
		const { value } = e.target;
		setSearchField(value.toLocaleLowerCase());
	};

	const filteredLists = data.filter(({ name }) =>
		name.toLocaleLowerCase().includes(searchField),
	);

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
				{filteredLists.map(({ name, id }) => (
					<ListItem key={id} name={name} />
				))}
			</ul>
		</>
	);
}
