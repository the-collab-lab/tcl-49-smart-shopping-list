import './ListItem.css';
import React from 'react';

export function ListItem({ name, trigger }) {
	const handlePopUp = () => {
		console.log('click');
	};

	return (
		<React.Fragment>
			<div>
				<input type="checkbox" />
				<li className="ListItem">{name}</li>

				<div>
					<button className="">Details</button>
					<button className="" onClick={handlePopUp}>
						Delete
					</button>
				</div>
			</div>
			{trigger ? 'show pop up' : ''}
		</React.Fragment>
	);
}
