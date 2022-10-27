import './ListItem.css';
import { updateItem } from '../api';

export function ListItem({ name, items, listToken }) {
	const { isChecked, id, totalPurchases, dateLastPurchased } = items;
	const newDate = new Date();
	const updateTotalPurchases = totalPurchases + 1;

	console.log({ dateLastPurchased });

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
				dateLastPurchased: newDate,
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
