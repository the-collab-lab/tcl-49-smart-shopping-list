import { useState } from 'react';
import { ListSection } from '../components';
import ListPrompt from '../components/ListPrompt';
import { comparePurchaseUrgency } from '../api/firebase';
import './Layout.css';

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
	console.log(sortedList);

	const buyingSoonList = sortedList.filter(
		({ daysUntilNextPurchase }) => daysUntilNextPurchase < 7,
	);
	const kindaBuyingSoonList = sortedList.filter(
		({ daysUntilNextPurchase }) =>
			daysUntilNextPurchase > 7 && daysUntilNextPurchase < 29,
	);
	const notBuyingSoonList = sortedList.filter(
		({ daysUntilNextPurchase }) =>
			daysUntilNextPurchase >= 29 && daysUntilNextPurchase < 60,
	);
	const inactiveList = sortedList.filter(
		({ daysUntilNextPurchase }) => daysUntilNextPurchase > 60,
	);

	return (
		<>
			{data.length ? (
				<div className="main-layout bg-white rounded-lg py-9 pl-10">
					<form>
						<label htmlFor="filter-items" className="font-inter font-semibold">
							Filter items
						</label>
						<input
							className="border-2 rounded ml-4 w-2/4"
							type="search"
							name="filter-items"
							id="filter-items"
							onChange={onSearchChange}
							value={searchField}
						/>
					</form>

					<ListSection
						data={buyingSoonList}
						title="Buying soon"
						listToken={listToken}
						tagColor="red"
					/>

					<ListSection
						data={kindaBuyingSoonList}
						title="Buying kind of soon"
						listToken={listToken}
						tagColor="yellow"
					/>

					<ListSection
						data={notBuyingSoonList}
						title="Not buying soon"
						listToken={listToken}
						tagColor="green"
					/>

					<ListSection
						data={inactiveList}
						title="Inactive items"
						listToken={listToken}
						tagColor="pink"
					/>
				</div>
			) : (
				<ListPrompt />
			)}
		</>
	);
}
