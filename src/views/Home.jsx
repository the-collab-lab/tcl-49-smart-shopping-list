import './Home.css';
import React from 'react';

export function Home({ handleClick, listToken }) {
	console.log(listToken);
	// const Toggle = () => {
	// 	const [show, toggleShow] = useState(true);

	return (
		<div className="Home">
			<p>
				Hello from the home (<code>/</code>) page!
			</p>
			{!listToken && <button onClick={handleClick}>Create list</button>}
		</div>
	);
}
