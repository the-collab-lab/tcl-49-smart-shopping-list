/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { AddItem, Home, Layout, List } from './views';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useStateWithStorage } from './utils';
import { generateToken } from '@the-collab-lab/shopping-list-utils';

export function App() {
	const navigate = useNavigate();
	const [listToken, setListToken] = useStateWithStorage(
		null,
		'tcl-shopping-list-token',
	);

	useEffect(() => {
		if (listToken) navigate('/list');

		return;
	}, []);

	function handleClick() {
		if (listToken) return;
		const token = generateToken();
		setListToken(token);
	}

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route
					index
					element={
						<Home
							handleClick={handleClick}
							listToken={listToken}
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
