import './ListItem.css';
import { updateItem } from '../api';

export function ListItem({ name, items, listToken }) {
	//const [isDisabled, setIsDisabled] = useState(false);
	const {
		isChecked,
		id,
		totalPurchases,
		dateLastPurchased,
		dateNextPurchased,
	} = items;
	const currentTime = new Date();
	//setIsDisabled(isChecked);
	function getTimeElapsed() {
		const currentTimeToSec = currentTime.getTime() / 1000;
		const lastPurchaseToSec = dateLastPurchased?.seconds || 0;
		const timeElapsed = currentTimeToSec - lastPurchaseToSec;
		const ONE_DAY_IN_SECONDS = 86400;
		return timeElapsed >= ONE_DAY_IN_SECONDS;
	}
	function uncheckCheckboxIfOneDayHasPassed() {
		if (isChecked) {
			//debugger;
			if (getTimeElapsed()) {
				const itemData = {
					...items,
					isChecked: false,
				};

				updateItem(listToken, id, itemData);
				//setIsDisabled(false);
			}
		}
	}

	uncheckCheckboxIfOneDayHasPassed();
	const handleCheckbox = () => {
		if (!isChecked) {
			const itemData = {
				isChecked: true,
				dateLastPurchased: null, // Resets the dateLastPurchased allowing it to be set to today's date
				dateNextPurchased,
				totalPurchases: totalPurchases + 1,
			};

			updateItem(listToken, id, itemData);
			//setIsDisabled(true);
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
					disabled={isChecked}
				/>
				<label htmlFor="purchased">{name}</label>
			</li>
		</>
	);
}
