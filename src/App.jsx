/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { AddItem, Home, Layout, List } from './views';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getItemData, streamListItems } from './api';
import { useStateWithStorage } from './utils';
import { generateToken } from '@the-collab-lab/shopping-list-utils';

export function App() {
	const navigate = useNavigate();
	const [data, setData] = useState([]);

	const [listToken, setListToken] = useStateWithStorage(
		null,
		'tcl-shopping-list-token',
	);

	function handleClick() {
		if (listToken) return;
		const token = generateToken();
		setListToken(token);
	}

	useEffect(() => {
		if (listToken) navigate('/list');

		// }
		/**
		 * streamListItems` takes a `listToken` so it can communicate
		 * with our database; then calls a callback function with
		 * a `snapshot` from the database.
		 *
		//  * Refer to `api/firebase.js`.
		//  */
		return streamListItems(listToken, (snapshot) => {
			// 		/**
			// 		 * Read the documents in the snapshot and do some work
			// 		 * on them, so we can save them in our React state.
			// 		 *
			// 		 * Refer to `api/firebase.js`
			// 		 */
			const nextData = getItemData(snapshot);

			// 		/** Finally, we update our React state. */
			setData(nextData);
		});
	}, [listToken]);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route
					index
					element={<Home handleClick={handleClick} listToken={listToken} />}
				/>
				<Route path="/list" element={<List data={data} />} />
				<Route path="/add-item" element={<AddItem listToken={listToken} />} />
			</Route>
		</Routes>
	);
}
