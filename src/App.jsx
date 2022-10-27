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
	const [displayName, setDisplayName] = useState('');

	const [listToken, setListToken] = useStateWithStorage(
		null,
		'tcl-shopping-list-token',
	);

	function handleClick() {
		if (listToken) return;
		const token = generateToken();
		setListToken(token);
	}

	//Pushing again to check what breaks the code
	const handleInputChange = (evt) => {
		setDisplayName(evt.target.value);
	};

	useEffect(() => {
		if (listToken) {
			navigate('/list');

			return streamListItems(listToken, (snapshot) => {
				const nextData = getItemData(snapshot);

				setData(nextData);
			});
		}
	}, [listToken]);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route
					index
					element={
						<Home
							handleClick={handleClick}
							listToken={listToken}
							displayName={displayName}
							handleInputChange={handleInputChange}
							setDisplayName={setDisplayName}
							setListToken={setListToken}
						/>
					}
				/>
				<Route
					path="/list"
					element={<List data={data} listToken={listToken} />}
				/>
				<Route path="/add-item" element={<AddItem listToken={listToken} />} />
			</Route>
		</Routes>
	);
}
