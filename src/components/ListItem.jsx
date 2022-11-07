import './ListItem.css';
import { updateItem } from '../api';
import { deleteItem } from '../api';

export function ListItem({ name, items, listToken }) {
	const { isChecked, id, totalPurchases, dateLastPurchased } = items;
	const currentTime = new Date();

	if (isChecked) {
		const currentTimeToSec = currentTime.getTime() / 1000;
		const lastPurchaseToSec = dateLastPurchased.seconds;
		const timeElapsed = currentTimeToSec - lastPurchaseToSec;

		const ONE_DAY_IN_SECONDS = 86400;
		if (timeElapsed >= ONE_DAY_IN_SECONDS) {
			const itemData = {
				isChecked: false,
			};
			updateItem(listToken, id, itemData);
		}
	}

	const handleCheckbox = () => {
		if (isChecked) {
			const itemData = {
				isChecked: false,
			};
			updateItem(listToken, id, itemData);
		} else {
			const updatedTotalPurchases = totalPurchases + 1;
			const itemData = {
				isChecked: true,
				totalPurchases: updatedTotalPurchases,
				dateLastPurchased: currentTime,
			};
			updateItem(listToken, id, itemData);
		}
	};

	const handleDeleteItem = () => {
		const confirm = window.confirm(`Do you really want to delete ${name}`);

		try {
			if (confirm) {
				deleteItem(listToken, id);
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
				/>
				<label htmlFor="purchased">{name}</label>
				<div>
					<button onClick={handleDeleteItem}>delete</button>
				</div>
			</li>
		</>
	);
}
