import { useState } from 'react';
import { Button, FormInput } from '../components';

export function AddItem() {
	const [displayName, setDisplayName] = useState('');
	const [selectedOption, setSelectedOption] = useState('soon');
	const [errorMsg, setErrorMsg] = useState('');

	const resetFormFields = () => {
		setDisplayName('');
		setSelectedOption('soon');
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!displayName) {
			setErrorMsg('oops you need to provide an item');
			return;
		}
		resetFormFields();
		setErrorMsg('');
		console.log(
			`${displayName} ${selectedOption} successfully saved in the database`,
		);
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
					// required
					onChange={handleChange}
					name="displayName"
					id="item"
					value={displayName}
				/>
				{errorMsg && <p>{errorMsg}</p>}
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
}
