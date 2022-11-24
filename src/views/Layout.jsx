import { Outlet, NavLink } from 'react-router-dom';

// import './Layout.css';

export function Layout() {
	return (
		<>
			<div className="Layout bg-slate-200 w-3/5 mx-auto">
				<header className="Layout-header">
					<h1 className="text-3xl font-bold underline">Smart shopping list</h1>
				</header>
				<main className="Layout-main">
					<Outlet />
				</main>
				<nav className="Nav">
					<NavLink to="/" className="Nav-link">
						Home
					</NavLink>
					<NavLink to="/list" className="Nav-link">
						List
					</NavLink>
					<NavLink to="/add-item" className="Nav-link">
						Add Item
					</NavLink>
				</nav>
			</div>
		</>
	);
}
