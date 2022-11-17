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

	console.log(data);

	// const arr = [
	// 	{title: "Carrot", next: 13, last: 5},
	//   {title: "Bread", next: 13, last: 15},
	// 	{title: "Banana", next: 4, last: 80},
	//   {title: "Banana2", next: 4, last: 65},
	// 	{title: "Milk", next: 2, last: 2},
	// 	{title: "Apple", next: 1, last: 20}
	// ]
	// arr.sort( (item1, item2) =>{
	// 	if (item1.last > 60) {
	// 		  if (item1.last < item2.last) return -1;
	// 		if (item1.last > item2.last) return 1;
	// 	}
	// 		  if (item1.next < item2.next) return -1;
	// 		if (item1.next > item2.next) return 1;
	// 	if (item1.title > item2.title) return 1;
	// 	if (item1.title < item2.title) return -1;
	// });
	// console.log(arr)

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
