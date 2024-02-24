import React from 'react';

import * as DropdownMenu from 'zeego/dropdown-menu';

export default function Dropdown({triggerStyle, content, children}) {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger style={triggerStyle}>{children}</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{content &&
					content.map((item) => {
						return (
							<DropdownMenu.Item key={item.title} onSelect={item.onSelect}>
								<DropdownMenu.ItemTitle>{item.title}</DropdownMenu.ItemTitle>
							</DropdownMenu.Item>
						);
					})}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}
