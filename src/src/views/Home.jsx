import './Home.css';
import { FormInput } from './../components/form-input/form-input.component';
import { useState } from 'react';
import { Button } from './../components/button/button.component';
import { checkToken } from '../api/firebase';
import { useNavigate } from 'react-router-dom';

export function Home({ handleClick, listToken, setListToken }) {
	const [displayName, setDisplayName] = useState('');
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

	const handleChange = (evt) => {
		setDisplayName(evt.target.value);
	};

	return (
		<div className="Home">
			{!listToken && <button onClick={handleClick}>Create list</button>}

			<form onSubmit={handleSubmit}>
				<FormInput
					label="Enter Token"
					type="text"
					onChange={handleChange}
					name="displayName"
					id="token"
					value={displayName}
					placeholder="Enter your 3 word token"
				/>
				<p>{errorMessage}</p>
				<Button type="submit">Join an existing list</Button>
			</form>
		</div>
	);
}
