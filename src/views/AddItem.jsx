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

		const isEmpty = () => itemName.trim().length === 0;

		const isDuplicated = () => {
			const itemNames = itemList.map((item) =>
				item.name.toLowerCase().replace(/[^a-zA-Z0-9]+/g, ''),
			);
			return itemNames.includes(
				itemName.toLowerCase().replace(/[^a-zA-Z0-9]+/g, ''),
			);
		};

		try {
			if (isEmpty()) {
				setMessage("Error: Please enter your item's name.");
			} else if (isDuplicated()) {
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
			setMessage('Error: This item was not added to the database.');
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
		<div className="main-layout shopping-form-container w-full mx-auto py-4 bg-white py-9 pl-10">
			{message ? (
				<div className="w-full flex flex-col items-center">
					<h2 className="text-center text-rose-700 font-semibold text-base drop-shadow-xl">
						{message}
					</h2>
					<Link to="/list">
						<button className="bg-green-600 py-2 px-3 my-3 rounded-full text-white shadow-md hover:text-green-600 hover:bg-transparent hover:border-solid hover:border-2 hover:font-semibold">
							View the list
						</button>
					</Link>
				</div>
			) : (
				<form onSubmit={handleSubmit} className="w-full px-4">
					<FormInput
						label="Add an item here:"
						type="text"
						onChange={handleChange}
						name="itemName"
						id="itemName"
						required
						placeholder="Loaf of bread"
						value={itemName}
					/>
					<div className="select-next-purchase-buttons mb-4">
						<fieldset>
							<legend className="font-normal">
								How soon will you buy this again?
							</legend>
							<div className="radio-btn font-normal">
								<label htmlFor="soon">
									<input
										className="mr-2"
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
							<div className="radio-btn font-normal">
								<label htmlFor="kindOfSoon">
									<input
										className="mr-2"
										type="radio"
										name="daysUntilNextPurchase"
										id="kindOfSoon"
										value={14 || daysUntilNextPurchase}
										onChange={handleChange}
									/>
									Kind of soon
								</label>
							</div>
							<div className="radio-btn font-normal">
								<label htmlFor="notSoon">
									<input
										className="mr-2"
										type="radio"
										name="daysUntilNextPurchase"
										id="notSoon"
										value={30 || daysUntilNextPurchase}
										onChange={handleChange}
									/>
									Not soon
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
