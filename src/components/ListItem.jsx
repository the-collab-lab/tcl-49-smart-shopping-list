import './ListItem.css';
import { updateItem, deleteItem } from '../api/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';

import { useState } from 'react';
import { stylus } from 'docker/src/languages';

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

	const handleUrgencyIndicator = () => {
		if (items?.currentEstimate <= 7) {
			return {
				iconName: 'coffee',
				prefix: 'fas',
				faPrimaryColor: 'yellow',
			};
		} else if (items?.currentEstimate > 7 && items?.currentEstimate <= 30) {
			return {
				iconName: 'coffee',
				prefix: 'fas',
			};
		} else if (items?.currentEstimate > 30 && items?.currentEstimate < 60) {
			return {
				iconName: 'coffee',
				prefix: 'fas',
			};
		} else if (items?.currentEstimate > 60) {
			return {
				iconName: 'coffee',
				prefix: 'fas',
			};
		}
	};

	const handleUrgencyColor = () => {
		if (items?.currentEstimate <= 7) {
			return 'yellow';
		} else if (items?.currentEstimate > 7 && items?.currentEstimate <= 30) {
			return 'yellow';
		} else if (items?.currentEstimate > 30 && items?.currentEstimate < 60) {
			return 'yellow';
		} else if (items?.currentEstimate > 60) {
			return 'yellow';
		}
	};

	console.log(items.currentEstimate);

	return (
		<>
			<li className="ListItem">
				<FontAwesomeIcon
					icon={handleUrgencyIndicator()}
					style={{ '--fa-primary-color': handleUrgencyColor() }}
				/>
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
