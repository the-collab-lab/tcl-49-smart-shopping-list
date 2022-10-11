import { useState } from 'react';

export function AddItem() {
	const [value, setValue] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('it is working!!!');
	};

	const handleChange = () => {
		setValue(!value);
	};

	return (
		<div className="shopping-list">
			<form onSubmit={handleSubmit}>
				<div>
					<h4>Item name:</h4>
				</div>

				<div className="search__input">
					{' '}
					<input className="input" type="text" placeholder=" Eggs" />{' '}
				</div>
				<p>How soon will you buy this again?</p>

				<label>
					<input type="radio" value={'soon'} onChange={handleChange} />
					soon
				</label>
				<br />
				<br />
				<label>
					<input type="radio" value={'Kind of soon'} onChange={handleChange} />
					Kind of soon
				</label>
				<br />
				<br />

				<label>
					<input type="radio" value={'not soon'} onChange={handleChange} />
					Not soon
				</label>
				<br />
				<br />
				<br />
				<br />

				<div>
					{' '}
					<button type="submit">List</button>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div>
					<button type="submit">List</button>
					<button type="submit">Add item</button>
				</div>
			</form>
		</div>
	);
}
