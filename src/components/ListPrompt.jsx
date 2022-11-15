import React from 'react';
import { Link } from 'react-router-dom';

export default function PromptButton() {
	return (
		<div>
			<p>Your shopping list is currently empty</p>
			<Link className="add-prompt" to="/add-item">
				Add an item
			</Link>
		</div>
	);
}
