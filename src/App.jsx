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
	/**
	 * Here, we're using a custom hook to create `listToken` and a function
	 * that can be used to update `listToken` later.
	 *
	 * `listToken` is `my test list` by default so you can see the list
	 * of items that was prepopulated for this project.
	 * You'll later set it to `null` by default (since new users do not
	 * have tokens), and use `setListToken` when you allow a user
	 * to create and join a new list.
	 */

	const [listToken, setListToken] = useStateWithStorage(null);

	function handleClick() {
		if (!listToken) {
			const token = generateToken();
			// console.log(token);
			localStorage.setItem('tcl-shopping-list-token', token);
			setListToken(token);
			navigate('/list');
		} else {
			navigate('/list');
		}
	}

	// useEffect(() => {
	// 	// if (!listToken)

	// 	// }
	// 	/**
	// 	 * streamListItems` takes a `listToken` so it can communicate
	// 	 * with our database; then calls a callback function with
	// 	 * a `snapshot` from the database.
	// 	 *
	// 	 * Refer to `api/firebase.js`.
	// 	 */
	// 	return streamListItems(listToken, (snapshot) => {
	// 		/**
	// 		 * Read the documents in the snapshot and do some work
	// 		 * on them, so we can save them in our React state.
	// 		 *
	// 		 * Refer to `api/firebase.js`
	// 		 */
	// 		const nextData = getItemData(snapshot);

	// 		/** Finally, we update our React state. */
	// 		setData(nextData);
	// 	});
	// }, [listToken]);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home handleClick={handleClick} />} />
				<Route path="/list" element={<List data={data} />} />
				<Route path="/add-item" element={<AddItem />} />
			</Route>
		</Routes>
	);
}
