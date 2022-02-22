import React from 'react';
import { Listbox, ListboxOption } from '@reach/listbox';
import DownChevron from './svg/DownChevron';
import '@reach/listbox/styles.css';

const TodoImportanceDropdown = ({ isSort, importance, changeImportance }) => {
	return (
		<div className="todo-dropdown">
			<Listbox
				value={importance}
				onChange={changeImportance}
				arrow={<DownChevron className="todo-dropdown__icon" />}
			>
				{isSort ? (
					<ListboxOption value="Sort By Importance">Sort By Importance</ListboxOption>
				) : null}

				<ListboxOption value="Not Important">Not Important</ListboxOption>
				<ListboxOption value="Important">Important</ListboxOption>
				<ListboxOption value="Very Important">Very Important</ListboxOption>
			</Listbox>
		</div>
	);
};

export default TodoImportanceDropdown;
