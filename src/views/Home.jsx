import './Home.css';
import { FormInput } from './../components/form-input/form-input.component';
import { useState } from 'react';
import { Button } from './../components/button/button.component';
import { checkToken } from '../api/firebase';
import { useNavigate } from 'react-router-dom';

export function Home({
	displayName,
	handleClick,
	handleInputChange,
	listToken,
	setDisplayName,
	setListToken,
}) {
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const tokenExists = await checkToken(displayName);

		if (tokenExists) {
			setListToken(displayName, 'tcl-shopping-list-token');
			navigate('/list');
		} else {
			setErrorMessage('Invalid token | The list does not exist');
		}

		setDisplayName('');
	};

	return (
		<div className="main-layout Home w-full mx-auto py-9 bg-white rounded-lg p-10 text-center">
			{!listToken && (
				<button
					className="bg-green-600 py-2 px-3 rounded-full text-white shadow-md hover:text-green-600 hover:bg-transparent hover:border-solid hover:border-2 hover:font-semibold"
					onClick={handleClick}
				>
					Create list
				</button>
			)}

			<form onSubmit={handleSubmit}>
				<FormInput
					label="Enter a token here:"
					type="text"
					onChange={handleInputChange}
					name="displayName"
					id="token"
					value={displayName}
					placeholder="my test token"
				/>
				<p>{errorMessage}</p>
				<Button type="submit">Join an existing list</Button>
			</form>
		</div>
	);
}
