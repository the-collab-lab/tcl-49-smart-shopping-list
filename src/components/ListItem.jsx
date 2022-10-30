import './ListItem.css';
import { updateItem } from '../api';

const currentTime = new Date();

export function ListItem({ name, items, listToken }) {
	const { isChecked, id, totalPurchases, dateLastPurchased } = items;

	if (isChecked) {
		const currentDate = new Date();
		const currentTimeToSec = currentDate.getTime() / 1000;
		const lastPurchaseToMilSec = dateLastPurchased.seconds * 1000;
		const timeElapsed = currentTimeToSec - lastPurchaseToMilSec;

		const timeToUncheck = 86400;
		if (timeElapsed >= timeToUncheck) {
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
			</li>
		</>
	);
}
