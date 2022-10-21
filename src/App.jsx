/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { AddItem, Home, Layout, List } from './views';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useStateWithStorage } from './utils';
import { generateToken } from '@the-collab-lab/shopping-list-utils';

export function App() {
	const navigate = useNavigate();
	const [displayName, setDisplayName] = useState('');
	const [listToken, setListToken] = useStateWithStorage(
		null,
		'tcl-shopping-list-token',
	);

	useEffect(() => {
		if (listToken) navigate('/list');
	}, []);

	function handleClick() {
		if (listToken) return;
		const token = generateToken();
		setListToken(token);
	}

	const handleInputChange = (evt) => {
		setDisplayName(evt.target.value);
	};

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route
					index
					element={
						<Home
							displayName={displayName}
							handleClick={handleClick}
							handleInputChange={handleInputChange}
							listToken={listToken}
							setDisplayName={setDisplayName}
							setListToken={setListToken}
						/>
					}
				/>
				<Route path="/list" element={<List listToken={listToken} />} />
				<Route path="/add-item" element={<AddItem listToken={listToken} />} />
			</Route>
		</Routes>
	);
}
