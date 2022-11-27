import { Outlet, NavLink } from 'react-router-dom';

import './Layout.css';

export function Layout() {
	return (
		<>
			<div className="Layout mt-14 w-4/5 mx-auto">
				<header className="Layout-header">
					<h1 className="text-4xl mb-4 text-center font-bold underline text-white ">
						Smart shopping list
					</h1>
				</header>
				<main className="Layout-main">
					<Outlet />
				</main>
				<nav className="Nav bg-white rounded-lg drop-shadow-lg mt-8 py-4 flex justify-around">
					<NavLink
						to="/"
						className="Nav-link font-semibold hover:text-green-600 focus:text-green-600"
					>
						Home
					</NavLink>
					<NavLink
						to="/list"
						className="Nav-link font-semibold hover:text-green-600 focus:text-green-600"
					>
						List
					</NavLink>
					<NavLink
						to="/add-item"
						className="Nav-link font-semibold hover:text-green-600 focus:text-green-600"
					>
						Add Item
					</NavLink>
				</nav>
			</div>
		</>
	);
}
