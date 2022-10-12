import { useState } from 'react';
import { Button, FormInput } from '../components';

// const defaultFormFields = {
// 	displayName: '',
// 	selectedOption: 'kindOfSoon',
// 	soon: '',
// 	kindOfSoon: '',
// 	notSoon: '',
// };
export function AddItem() {
	// const [formFields, setFormFields] = useState(defaultFormFields);
	// const { displayName, selectedOption, soon, kindOfSoon, notSoon } = formFields;

	const [displayName, setDisplayName] = useState('');
	const [selectedOption, setSelectedOption] = useState('soon');

	const handleSubmit = (e) => {
		e.preventDefault();
		resetFormFields();
		console.log(
			`${displayName} ${selectedOption} successfully saved in the database`,
		);
	};

	const resetFormFields = () => {
		setDisplayName('');
		setSelectedOption('soon');
	};

	const handleChange = (e) => {
		const { value } = e.target;
		setDisplayName(value);
	};

	const onValueChange = (e) => {
		const { value } = e.target;
		setSelectedOption(value);
	};

	return (
		<div className="shopping-form-container">
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Item name"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					id="item"
					value={displayName}
				/>
				<div className="select-next-purchase-buttons">
					<fieldset>
						<legend>How soon will you buy this again?</legend>
						<div className="radio-btn">
							<label>
								<input
									type="radio"
									value="soon"
									checked={selectedOption === 'soon'}
									onChange={onValueChange}
								/>
								Soon
							</label>
						</div>
						<div className="radio-btn">
							<label>
								<input
									type="radio"
									value="kindOfSoon"
									checked={selectedOption === 'kindOfSoon'}
									onChange={onValueChange}
								/>
								Kind of Soon
							</label>
						</div>
						<div className="radio-btn">
							<label>
								<input
									type="radio"
									value="notSoon"
									checked={selectedOption === 'notSoon'}
									onChange={onValueChange}
								/>
								Not Soon
							</label>
						</div>
					</fieldset>
				</div>
				<Button type="submit">Add Item</Button>
			</form>
		</div>
	);
	// return (
	// 	<div className="shopping-list">
	// 		<form onSubmit={handleSubmit}>
	// 			<div>
	// 				<h4>Item name:</h4>
	// 			</div>

	// 			<div className="search__input">
	// 				{' '}
	// 				<input className="input" type="text" placeholder=" Eggs" />{' '}
	// 			</div>
	// 			<p>How soon will you buy this again?</p>

	// 			<label>
	// 				<input type="radio" value={'soon'} onChange={handleChange} />
	// 				soon
	// 			</label>
	// 			<br />
	// 			<br />
	// 			<label>
	// 				<input type="radio" value={'Kind of soon'} onChange={handleChange} />
	// 				Kind of soon
	// 			</label>
	// 			<br />
	// 			<br />

	// 			<label>
	// 				<input type="radio" value={'not soon'} onChange={handleChange} />
	// 				Not soon
	// 			</label>
	// 			<br />
	// 			<br />
	// 			<br />
	// 			<br />

	// 			<div>
	// 				{' '}
	// 				<button type="submit">List</button>
	// 			</div>
	// 			<button type="submit">add item</button>
	// 		</form>
	// 	</div>
	// );
}
