import React from 'react';
import { Listbox, ListboxOption } from '@reach/listbox';
import DownChevron from './svg/DownChevron';
import '@reach/listbox/styles.css';

const TodoImportanceDropdown = ({ importance }) => {
	return (
		<Listbox value={importance} arrow={<DownChevron className="todo-item__importance-icon" />}>
			<ListboxOption value="Not Important">Not Important</ListboxOption>
			<ListboxOption value="Important">Important</ListboxOption>
			<ListboxOption value="Very Important">Very Important</ListboxOption>
		</Listbox>
	);
};

export default TodoImportanceDropdown;
