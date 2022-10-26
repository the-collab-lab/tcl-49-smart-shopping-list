import { useState } from 'react';
import { ListItem } from '../components';
import { Link } from 'react-router-dom';
import '../index.css';
import ListPrompt from '../components/ListPrompt';

export function List({ data }) {
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
			{filteredLists[0] ? (
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
						{filteredLists.map(({ name, id }) => (
							<ListItem key={id} name={name} />
						))}
					</ul>
				</div>
			) : (
				<ListPrompt />
			)}
		</>
	);
}
