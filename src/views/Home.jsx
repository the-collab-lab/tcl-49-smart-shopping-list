import './Home.css';
import { FormInput } from './../components/form-input/form-input.component';
import { useState } from 'react';
import { Button } from './../components/button/button.component';

export function Home() {
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
			<p>
				Hello from the home (<code>/</code>) page!
			</p>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Enter Token"
					type="text"
					onChange={handleChange}
					name="displayName"
					id="token"
					value={displayName}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</div>
	);
}
