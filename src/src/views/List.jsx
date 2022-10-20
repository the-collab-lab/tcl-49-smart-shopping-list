import { useEffect, useState } from 'react';
import { ListItem } from '../components';
import { getItemData, streamListItems } from '../api';

export function List({ listToken }) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		streamListItems(listToken, (snapshot) => {
			// 		/**
			// 		 * Read the documents in the snapshot and do some work
			// 		 * on them, so we can save them in our React state.
			// 		 *
			// 		 * Refer to `api/firebase.js`
			// 		 */
			const nextData = getItemData(snapshot);

			// 		/** Finally, we update our React state. */
			setData(nextData);
			setLoading(false);
		});
	}, [listToken]);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<p>
				Hello from the <code>/list</code> page!
			</p>
			<ul>
				{data.map(({ name, id }) => (
					<ListItem key={id} name={name} />
				))}
			</ul>
		</>
	);
}
