import './ListItem.css';
// import { updateItem } from '../api';

export function ListItem({ name }) {
	// return <li className="ListItem">{name}</li>;

	const handleCheckbox = () => {
		console.log('teri');
	};

	return (
		<li className="ListItem">
			<form>
				<input
					type="checkbox"
					name="purchased"
					id="purchased"
					// defaultChecked={isChecked}
					onChange={handleCheckbox}
				/>
				<label htmlFor="purchased">{name}</label>
			</form>
		</li>
	);
}
