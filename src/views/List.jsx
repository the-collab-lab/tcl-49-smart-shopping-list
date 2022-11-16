import { useState } from 'react';
import { ListSection } from '../components';
import ListPrompt from '../components/ListPrompt';

export function List({ data, listToken }) {
	const [searchField, setSearchField] = useState('');

	const onSearchChange = (e) => {
		const { value } = e.target;
		setSearchField(value.toLowerCase());
	};

	const filteredListItems = data.filter(({ name }) =>
		name.toLowerCase().includes(searchField),
	);

	const buyingSoonList = filteredListItems.filter(
		({ currentEstimate }) => currentEstimate <= 7,
	);
	const kindaBuyingSoonList = filteredListItems.filter(
		({ currentEstimate }) => currentEstimate > 7 && currentEstimate < 30,
	);
	const notBuyingSoonList = filteredListItems.filter(
		({ currentEstimate }) => currentEstimate >= 30 && currentEstimate < 60,
	);
	const inactiveList = filteredListItems.filter(
		({ currentEstimate }) => currentEstimate > 60,
	);

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

					<ListSection
						data={buyingSoonList}
						title="Buying nowww"
						listToken={listToken}
						tagColor="red"
					/>

					<ListSection
						data={kindaBuyingSoonList}
						title="Buying kinda soon"
						listToken={listToken}
						tagColor="yellow"
					/>

					<ListSection
						data={notBuyingSoonList}
						title="Buying not soon"
						listToken={listToken}
						tagColor="green"
					/>

					<ListSection
						data={inactiveList}
						title="Inactive, please"
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
