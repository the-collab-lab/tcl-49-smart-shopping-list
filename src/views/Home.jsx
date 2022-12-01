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
			setErrorMessage('Error! Invalid token: this list does not exist. :(');
		}

		setDisplayName('');
	};

	return (
		<div className="main-layout Home w-full mx-auto py-9 bg-white rounded-lg p-10 text-center">
			{!listToken && (
				<button
					className="bg-green-500 py-1 px-3 mb-4 rounded text-white hover:text-green-700 hover:bg-transparent hover:border-2 hover:font-normal"
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
				<p className="text-red-600 m-4" role="alert">
					{errorMessage}
				</p>
				<button
					type="submit"
					className="bg-green-500 py-1 px-3 mt-4 mb-2 rounded text-white hover:text-green-700 hover:bg-transparent hover:border-2 hover:font-normal"
				>
					Join an existing list
				</button>
			</form>
		</div>
	);
}
