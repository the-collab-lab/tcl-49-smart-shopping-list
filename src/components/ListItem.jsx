import './ListItem.css';
import React from 'react';

export function ListItem({ name, trigger, handleTrigger }) {
	return (
		<React.Fragment>
			<div style={{ display: 'flex' }}>
				<input type="checkbox" />
				<li className="ListItem">{name}</li>

				<div>
					<button className="">Details</button>
					<button className="" onClick={() => handleTrigger(true)}>
						Delete
					</button>
				</div>
			</div>
			{trigger ? (
				<div className="popup" style={{ marginBottom: '2em' }}>
					<div className="popup-inner">
						<p>Are you sure you want to delete</p>
						<button onClick={() => handleTrigger(false)}>No</button>
						<button>Yes</button>
					</div>
				</div>
			) : (
				''
			)}
		</React.Fragment>
	);
}
