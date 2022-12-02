import { Outlet, NavLink, Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/solid';
import { QueueListIcon } from '@heroicons/react/24/solid';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

import './Layout.css';

export function Layout() {
	return (
		<>
			<div className="mt-14 w-4/5 mx-auto ">
				<header className="flex justify-center items-stretch mb-4">
					{/* <ShoppingCartIcon className="h-11 w-11 text-black mx-2" /> */}
					<h1 className="text-5xl text-center font-bold text-white mb-6">
						Shoppr.
					</h1>
				</header>
				<main>
					<Outlet />
				</main>
				<nav className="bg-green-700 rounded-lg drop-shadow-lg mt-8 py-4 flex justify-around">
					<NavLink
						to="/"
						className="flex text-white items-center font-semibold hover:rounded hover:animate-bounce"
					>
						<HomeIcon className="h-4 w-4 mr-4" />
						Home
					</NavLink>
					<NavLink
						to="/list"
						className=" flex text-white items-center font-semibold hover:rounded hover:animate-bounce "
					>
						<QueueListIcon className="h-4 w-4 mr-4" />
						List
					</NavLink>
					<NavLink
						to="/add-item"
						className="flex text-white items-center font-semibold hover:rounded hover:animate-bounce "
					>
						<PlusCircleIcon className="h-4 w-4 mr-4" />
						Add Item
					</NavLink>
				</nav>

				<footer className="text-white fixed -translate-x-1/2 left-1/2 bottom-0 w-full text-center">
					<Link to="/https://github.com/the-collab-lab/tcl-49-smart-shopping-list">
						Made with 💛 & 🔥 and from TCL 49
					</Link>
				</footer>
			</div>
		</>
	);
}
