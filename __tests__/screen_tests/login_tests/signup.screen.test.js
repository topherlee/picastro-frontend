import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {LoginScreen, SignUpScreen} from '../../src/screens/SigninScreen';

describe('SignUP screen', () => {
	it('should go to register screen on register', () => {
		const navigation = {navigate: () => {}};
		spyOn(navigation, 'navigate');

		const registerPage = render(<SignUpScreen />);

		const registerButton = registerPage.getByTestId('registerButton');
		fireEvent.press(registerButton);

		expect(navigation.navigate).toHaveBeenCalledWith('Home');
	});
});
