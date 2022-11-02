import { useState } from 'react';
import { Button, FormInput } from '../components';
import { Link } from 'react-router-dom';
import { addItem } from '../api';

export function AddItem({ listToken, itemList }) {
	const [formFields, setFormFields] = useState({
		itemName: '',
		daysUntilNextPurchase: 7,
	});

	//const [empty, setEmpty] = useState(''); // Empty submission: "Please, enter your item's name"
	//const [duplicate, setDuplicate] = useState(''); // Duplicated item: "${itemName} is already on your list. Please, add a different item!"
	const [message, setMessage] = useState(''); // Successful submission: "${itemName} successfully saved to your shopping list"

	const itemNamesNoChar = itemList.map((item) =>
		item.name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''),
	); // Item Names without special characters

	const { itemName, daysUntilNextPurchase } = formFields;

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			if (itemName === '') {
				setMessage("Please, enter your item's name");
			} else if (
				itemNamesNoChar.includes(
					itemName.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''),
				)
			) {
				setMessage(
					`${itemName} is already on your list. Please, add a different item.`,
				);
			} else {
				addItem(listToken, {
					itemName,
					daysUntilNextPurchase,
				});
				setMessage(`${itemName} successfully saved to your shopping list!`);
			}
		} catch (error) {
			setMessage('item not added to the db');
		}
	};

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	try {
	// 		await addItem(listToken, {
	// 			itemName,
	// 			daysUntilNextPurchase,
	// 		});
	// 		setMessage(`${itemName} successfully saved to the database`);
	// 	} catch (error) {
	// 		setMessage('item not added to db');
	// 	}
	// };

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
