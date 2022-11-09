import { useState } from 'react';
import { Button, FormInput } from '../components';
import { Link } from 'react-router-dom';
import { addItem } from '../api';

export function AddItem({ listToken, itemList }) {
	const [formFields, setFormFields] = useState({
		itemName: '',
		daysUntilNextPurchase: 7,
	});

	const [message, setMessage] = useState('');

	const { itemName, daysUntilNextPurchase } = formFields;

	const handleSubmit = async (e) => {
		e.preventDefault();

		// const isValid = (itemName) => {
		// 	checkEmpty(itemName);
		// 	checkDuplicates(itemName);
		// }

		// const checkEmpty = (itemName) => {
		// 	itemName.trim().length === 0;
		// 	setMessage("Error: Please enter your item's name.");

		// }

		// const checkDuplicates = (itemName, itemList) => {
		// 	const itemNames = itemList.map((item) => item.name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''),);
		// 	itemNames.includes(itemName.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''));
		// 	setMessage(`${itemName} is already on your list. Please add a different item.`,);
		// }

		// try {
		// 	if(isEmpty()) {
		// 	setMessage("Error: Please enter your item's name.");
		// }
		// 	addItem(listToken, {
		// 		itemName,
		// 		daysUntilNextPurchase,
		// 	});
		// 	setMessage(`${itemName} was successfully saved to your shopping list!`);
		// } catch (error) {
		// 	setMessage('Error: This item not added to the database.');
		// }

		const itemNames = itemList.map((item) =>
			item.name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''),
		); // Item names without special characters for comparison

		try {
			// if (itemName.replace(/\s/g, '').length === 0) {
			if (itemName.trim().length === 0) {
				setMessage("Error: Please enter your item's name.");
			} else if (
				itemNames.includes(itemName.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''))
			) {
				setMessage(
					`${itemName} is already on your list. Please add a different item.`,
				);
			} else {
				await addItem(listToken, {
					itemName,
					daysUntilNextPurchase,
				});
				setMessage(`${itemName} was successfully saved to your shopping list!`);
			}
		} catch (error) {
			setMessage('Error: This item not added to the database.');
		}
	};

	const handleChange = (e) => {
		if (message) {
			setMessage('');
		}
		setFormFields((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="shopping-form-container">
			{message ? (
				<div>
					<h2>{message}</h2>
					<Link to="/list">
						<button>View the list</button>
					</Link>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<FormInput
						label="Item name"
						type="text"
						onChange={handleChange}
						name="itemName"
						id="itemName"
						required
						placeholder="item name"
						value={itemName}
					/>
					<div className="select-next-purchase-buttons">
						<fieldset>
							<legend>How soon will you buy this again?</legend>
							<div className="radio-btn">
								<label htmlFor="soon">
									<input
										type="radio"
										name="daysUntilNextPurchase"
										id="soon"
										value={7 || daysUntilNextPurchase}
										onChange={handleChange}
										defaultChecked
									/>
									Soon
								</label>
							</div>
							<div className="radio-btn">
								<label htmlFor="notSoon">
									<input
										type="radio"
										name="daysUntilNextPurchase"
										id="notSoon"
										value={14 || daysUntilNextPurchase}
										onChange={handleChange}
									/>
									Not Soon
								</label>
							</div>
							<div className="radio-btn">
								<label htmlFor="kindOfSoon">
									<input
										type="radio"
										name="daysUntilNextPurchase"
										id="kindOfSoon"
										value={30 || daysUntilNextPurchase}
										onChange={handleChange}
									/>
									Kind of Soon
								</label>
							</div>
						</fieldset>
					</div>

					<Button type="submit">Add Item</Button>
				</form>
			)}
		</div>
	);
}
