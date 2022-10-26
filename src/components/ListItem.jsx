import './ListItem.css';
// import { updateItem } from '../api';

export function ListItem({ name }) {
	const handleCheckbox = async () => {
		// try {
		// 	await updateItem(listToken, {
		// 		if(isChecked) {
		// 			console.log('working');
		// 		},
		// 	});
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	return (
		<li className="ListItem">
			<input
				type="checkbox"
				name="purchased"
				id="purchased"
				onChange={handleCheckbox}
			/>
			<label htmlFor="purchased">{name}</label>
		</li>
	);
}
