import { useState } from 'react';
import { Button, FormInput } from '../components';
import { Link } from 'react-router-dom';
import { addItem } from '../api';

export function AddItem() {
	const [displayName, setDisplayName] = useState('');
	const [selectedOption, setSelectedOption] = useState('soon');
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	// const [isPending, setIsPending] = useState(false);

	const resetFormFields = () => {
		setDisplayName('');
		setSelectedOption('soon');
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!displayName) {
			setErrorMsg('oops, item not saved to database. Enter an item');
			return;
		} else {
			setSuccessMsg(`${displayName} successfully saved to the database`);
		}
		resetFormFields();
		setErrorMsg('');
		console.log(addItem);
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
			{successMsg ? (
				<div>
					<h2>{successMsg}</h2>
					<div>
						<Link to="/list">
							<button>View the list</button>
						</Link>
					</div>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<FormInput
						label="Item name"
						type="text"
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
			)}
		</div>
	);
}
