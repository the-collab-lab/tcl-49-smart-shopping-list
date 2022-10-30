import { useState } from 'react';
import { ListItem } from '../components';
import ListPrompt from '../components/ListPrompt';

export function List({ data }) {
	const [searchField, setSearchField] = useState('');

	const onSearchChange = (e) => {
		const { value } = e.target;
		setSearchField(value.toLowerCase());
	};

	const isDataEmpty = ((data) => data.some((d) => !d.name))(data);

	const filteredList = isDataEmpty
		? []
		: data.filter(({ name }) => name.toLowerCase().includes(searchField));

	return (
		<>
			{isDataEmpty ? (
				<ListPrompt />
			) : (
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
						{filteredList.map(({ name, id }) => (
							<ListItem key={id} name={name} />
						))}
					</ul>
				</div>
			)}
		</>
	);
}
