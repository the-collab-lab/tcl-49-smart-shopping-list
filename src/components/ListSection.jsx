import React from 'react';
import { ListItem } from './ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/fontawesome-free-solid';

export const ListSection = ({ title, data, listToken, tagColor }) => {
	return (
		<ul>
			<FontAwesomeIcon
				icon={{
					iconName: 'tag',
					prefix: 'fas',
				}}
				style={{ color: tagColor, marginRight: 30 }}
			/>
			<h3>{title}</h3>
			{/* filter items be4 render */}
			{data.map(({ name, ...items }) => (
				<ListItem
					key={items.id}
					name={name}
					items={items}
					listToken={listToken}
				/>
			))}
		</ul>
	);
};
