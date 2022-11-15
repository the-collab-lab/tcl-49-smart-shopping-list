import './ListItem.css';
import { updateItem } from '../api';
import { deleteItem } from '../api';

import { useState } from 'react';

export function ListItem({ name, items, listToken }) {
	const {
		isChecked,
		id,
		totalPurchases,
		dateLastPurchased,
		dateNextPurchased,
	} = items;
	const [isDisabled, setIsDisabled] = useState(isChecked);

	const currentTime = new Date();
	function getTimeElapsed() {
		const currentTimeToSec = currentTime.getTime() / 1000;
		const lastPurchaseToSec = dateLastPurchased?.seconds || 0;
		const timeElapsed = currentTimeToSec - lastPurchaseToSec;
		const ONE_DAY_IN_SECONDS = 86400;
		return timeElapsed >= ONE_DAY_IN_SECONDS;
	}
	function uncheckCheckboxIfOneDayHasPassed() {
		if (isChecked) {
			if (getTimeElapsed()) {
				const itemData = {
					...items,
					isChecked: false,
				};

				updateItem(listToken, id, itemData);
			}
		}
	}

	uncheckCheckboxIfOneDayHasPassed();
	const handleCheckbox = () => {
		if (!isChecked) {
			const itemData = {
				isChecked: true,
				dateLastPurchased,
				dateNextPurchased,
				totalPurchases: totalPurchases + 1,
			};
			updateItem(listToken, id, itemData);
			setIsDisabled(true);
		}
	};

	const handleDeleteItem = async () => {
		const confirm = window.confirm(`Do you really want to delete ${name}`);

		try {
			if (confirm) {
				await deleteItem(listToken, id);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<li className="ListItem">
				<input
					type="checkbox"
					name="purchased"
					id="purchased"
					onChange={handleCheckbox}
					defaultChecked={isChecked}
					disabled={isDisabled}
				/>
				<label htmlFor="purchased">{name}</label>
				<div>
					<button onClick={handleDeleteItem}>delete</button>
				</div>
			</li>
		</>
	);
}
