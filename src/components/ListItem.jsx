import './ListItem.css';
import { updateItem } from '../api';

export function ListItem({ name, items, listToken }) {
	const { isChecked, id, totalPurchases, dateLastPurchased } = items;

	const currentDate = new Date();
	const updateTotalPurchases = totalPurchases + 1;

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
			<p>Total purchases: {totalPurchases}</p>
		</>
	);
}
