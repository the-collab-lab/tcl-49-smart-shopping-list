import './Home.css';
import { generateToken } from '@the-collab-lab/shopping-list-utils';

export function Home() {
	function handleClick() {
		const token = generateToken();
		console.log(token);
	}

	return (
		<div className="Home">
			<p>
				Hello from the home (<code>/</code>) page!
			</p>
			<button onClick={handleClick}>Create list</button>
		</div>
	);
}
