import './ListItem.css';
import { updateItem, deleteItem } from '../api/firebase';
import { useState } from 'react';
import { comparePurchaseUrgency } from '../api/firebase';

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

	// const sortedList = comparePurchaseUrgency(data);

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

	const handleAriaForColors = () => {
		if (items?.sortedList <= 7) {
			return 'soon';
		} else if (items?.sortedList > 7 && items?.sortedList < 30) {
			return 'kind of soon';
		} else if (items?.sortedList >= 30 && items?.sortedList < 60) {
			return 'not soon';
		} else if (items?.sortedList > 60) {
			return 'inactive';
		}
	};

	return (
		<>
			<li className="ListItem flex flex-row items-baseline font-caveat">
				<input
					type="checkbox"
					name="purchased"
					id="purchased"
					onChange={handleCheckbox}
					defaultChecked={isChecked}
					disabled={isDisabled}
					aria-label={handleAriaForColors}
				/>
				<label className="text-2xl ml-1 mr-2" htmlFor="purchased">
					{name}
				</label>
				<div>
					<button
						className="delete-button ml-2 text-base"
						onClick={handleDeleteItem}
					>
						delete
					</button>
				</div>
			</li>
		</>
	);
}
