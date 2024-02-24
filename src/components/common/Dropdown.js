import React, {useState, useContext, useEffect, useRef} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Alert,
	ScrollView,
	KeyboardAvoidingView,
	Dimensions,
	SafeAreaView,
	ActivityIndicator,
	Modal,
	Button,
} from 'react-native';

import * as DropdownMenu from 'zeego/dropdown-menu';

export default function Dropdown({triggerStyle, content, children}) {
	// console.log(triggerStyle, children, content);
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
