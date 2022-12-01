import React from 'react';
import { Link } from 'react-router-dom';

export default function PromptButton() {
	return (
		<div className="w-full flex flex-col items-center">
			<p className="text-center text-red-700 m-2 font-normal">
				Your shopping list is currently empty. Please add an item. :)
			</p>
			<Link
				className="bg-green-500 py-1 px-3 m-6 rounded text-white hover:text-green-700 hover:bg-transparent hover:border-2 hover:font-normal"
				to="/add-item"
			>
				Add an item
			</Link>
		</div>
	);
}
