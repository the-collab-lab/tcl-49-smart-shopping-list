import './ListItem.css';
import { updateItem } from '../api';

export function ListItem({ name, item, listToken }) {
	const { isChecked, id, totalPurchases, dateLastPurchased } = item;
	console.log({ isChecked, id, totalPurchases, dateLastPurchased });

	const handleCheckbox = () => {
		if (isChecked) {
			const itemData = {
				isChecked: true,
			};
			console.log(itemData);
			updateItem(listToken, id, itemData);
		} else {
			console.log('delibrate on this matter');
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
