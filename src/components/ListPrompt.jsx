import React from 'react';
import { Link } from 'react-router-dom';

export default function PromptButton() {
	return (
		<div className="w-full flex flex-col items-center">
			<p className="text-center text-rose-700 font-semibold text-base drop-shadow-xl">
				Your shopping list is currently empty
			</p>
			<Link
				className="add-prompt w-auto text-center mt-2 bg-green-600 py-2 px-3 rounded-full text-white shadow-md hover:text-green-600 hover:bg-white hover:border-solid hover:border-2 hover:border-green-600 hover:font-semibold"
				to="/add-item"
			>
				Add an item
			</Link>
		</div>
	);
}
