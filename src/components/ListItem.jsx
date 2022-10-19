import './ListItem.css';
import React from 'react';
// import PopupModal from './PopupModal';

export function ListItem({
	name,
	// buttonPopUp,
	// handleDeleteFalse,
	// handleDeleteTrue,
}) {
	return (
		<React.Fragment>
			<div style={{ display: 'flex' }}>
				<input type="checkbox" />
				<li className="ListItem">{name}</li>

				<div className="list-item">
					<button>Details</button>
					<button
					// onClick={handleDeleteTrue}
					>
						Delete
					</button>
				</div>
			</div>
		</React.Fragment>
	);
}

// {
// 	buttonPopUp.show ? (
// 		<PopupModal
// 			handleDeleteTrue={handleDeleteTrue}
// 			handleDeleteFalse={handleDeleteFalse}
// 		/>
// 	) : (
// 		''
// 	);
// }

// {trigger ? (
// 	<div className="popup" style={{ marginBottom: '2em' }}>
// 		<div className="popup-inner">
// 			<p>Are you sure you want to delete?</p>
// 			<button onClick={handleTrigger}>No</button>
// 			<button>Yes</button>
// 		</div>
// 	</div>
// ) : (
// 	''
// )}
