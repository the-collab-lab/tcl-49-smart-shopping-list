import React from 'react';
import { ListItem } from './ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTag } from '@fortawesome/fontawesome-free-solid';

export const ListSection = ({
	title,
	// filteredListItems,
	data,
	listToken,
	tagColor,
}) => {
	return (
		<>
			<div className="flex items-center mt-6 ">
				<FontAwesomeIcon
					className="mr-1 text-xl pb-1"
					icon={{
						iconName: 'tag',
						prefix: 'fas',
					}}
					style={{ color: tagColor }}
				/>
				<h3 className="font-semibold text-xl pb-1">{title}</h3>
			</div>

			<ul>
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
		</>
	);
};
