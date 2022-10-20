import './ListItem.css';
import React from 'react';

export function ListItem({ name }) {
	return (
		<>
			<div>
				<li className="ListItem">{name}</li>
			</div>
		</>
	);
}
