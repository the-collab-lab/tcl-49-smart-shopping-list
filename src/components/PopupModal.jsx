function PopupModal({ handleDeleteTrue }) {
	return (
		<div className="modal" style={{ marginBottom: '2em' }}>
			<div className="modal-box">
				<p>Are sure you wanna delete?</p>
				<button className="modal-buttonCancel">Cancel</button>
				<button onClick={handleDeleteTrue} className="modal-buttonDelete">
					Yes
				</button>
			</div>
		</div>
	);
}

export default PopupModal;
