

import { useEffect, useState } from 'react';
import { ListItem } from '../components';
import { getItemData, streamListItems } from '../api';

export function List({ listToken }) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		streamListItems(listToken, (snapshot) => {
			const nextData = getItemData(snapshot);

			setData(nextData);
			setLoading(false);
		});
	}, [listToken]);

	if (loading) {
		return <p>Loading...</p>;
	}


export function List({ data }) {
	const [searchField, setSearchField] = useState('');

	const onSearchChange = (e) => {
		const { value } = e.target;
		setSearchField(value.toLocaleLowerCase());
		console.log(value);
	};

	const filteredLists = data.filter(({ name }) =>
		name.toLocaleLowerCase().includes(searchField),
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
					{filteredLists.map(({ name, id }) => (
						<ListItem key={id} name={name} />
					))}
				</ul>
			</form>
		</>
	);
}
