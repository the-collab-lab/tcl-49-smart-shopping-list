import './Home.css';
import { FormInput } from './../components/form-input/form-input.component';
import { useState } from 'react';
import { Button } from './../components/button/button.component';

export function Home({ handleClick, listToken }) {
	const [displayName, setDisplayName] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Submitting..');
	};

	const handleChange = (e) => {
		const { value } = e.target;
		setDisplayName(value);
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
				<Button type="submit">Join an existing list</Button>
			</form>
		</div>
	);
}
