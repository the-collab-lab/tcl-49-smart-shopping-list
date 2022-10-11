import './Home.css';
import { generateToken } from '@the-collab-lab/shopping-list-utils';

export function Home() {
	function handleClick() {
		const token = generateToken();
		console.log(token);
		//if user doesn't have a token, generates new token, saves and creates new list
		//if user has a token, redirects to List
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
