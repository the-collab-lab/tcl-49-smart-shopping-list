import './ListItem.css';
import React from 'react';

export function ListItem({ name }) {
	return (
		<React.Fragment>
			<div>
				<input type="checkbox" />
				<li className="ListItem">{name}</li>
			</div>
			<div>
				<button className="">Details</button>
				<button className="">Delete</button>
			</div>
		</React.Fragment>
	);
}
