import './ListItem.css';
import { updateItem } from '../api';

const currentDate = new Date();
const currentTime = currentDate.getTime() / 1000; //gets date in milliseconds since Jan 1, 1970 and converts to seconds

export function ListItem({ name, items, listToken }) {
	const { isChecked, id, totalPurchases, dateLastPurchased } = items;
	const updateTotalPurchases = totalPurchases + 1;

	// console.log({ dateLastPurchased });

	if (isChecked) {
		const lastPurchaseToMilSec = dateLastPurchased.seconds * 1000;

		const timeElapsed = currentTime - lastPurchaseToMilSec;

		const timeToUncheck = 120; //minutes to uncheck automatically: 24 hours x 60 min = 1440
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
			const itemData = {
				isChecked: true,
				totalPurchases: updateTotalPurchases,
				dateLastPurchased: currentDate,
			};

			updateItem(listToken, id, itemData);
		}
	};

	return (
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
	);
}
