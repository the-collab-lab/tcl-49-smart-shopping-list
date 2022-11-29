import { Outlet, NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { HomeIcon } from '@heroicons/react/24/solid';
import { QueueListIcon } from '@heroicons/react/24/solid';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

import './Layout.css';

export function Layout() {
	return (
		<>
			<div className="Layout mt-14 w-4/5 mx-auto">
				<header className="Layout-header flex justify-center items-stretch">
					<ShoppingCartIcon className="h-11 w-11 text-white mx-1 drop-shadow" />
					<h1 className="text-4xl mb-4 text-center font-bold underline text-white">
						Smart shopping list
					</h1>
				</header>
				<main className="Layout-main">
					<Outlet />
				</main>
				<nav className="Nav bg-white rounded-lg drop-shadow-lg mt-8 py-4 flex justify-around">
					<NavLink
						to="/"
						className="Nav-link flex items-center font-semibold hover:text-green-600 focus:text-green-600"
					>
						<HomeIcon className="h-4 w-4" />
						Home
					</NavLink>
					<NavLink
						to="/list"
						className="Nav-link flex items-center font-semibold hover:text-green-600 focus:text-green-600"
					>
						<QueueListIcon className="h-4 w-4" />
						List
					</NavLink>
					<NavLink
						to="/add-item"
						className="Nav-link flex items-center font-semibold hover:text-green-600 focus:text-green-600"
					>
						<PlusCircleIcon className="h-4 w-4" />
						Add Item
					</NavLink>
				</nav>
			</div>
		</>
	);
}
