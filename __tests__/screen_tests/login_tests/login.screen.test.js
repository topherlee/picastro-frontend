import React from "react";
import { fireEvent, render } from '@testing-library/react-native';
import { LoginScreen, SignUpScreen } from "../../../src/screens/SigninScreen";

describe('Login screen', () => {
    it('should go to home screen on login', () => {
        const navigation = {navigate: () => {}};
        spyOn(navigation, 'navigate');

        const loginPage = render(<LoginScreen />);
        const loginButton = loginPage.getByTestId('loginButton');
        fireEvent.press(loginButton);

        expect(navigation.navigate).toHaveBeenCalledWith("Home")
    })
    
    it('should go to forgotPassword screen on forgotPassword click', () => {
        const navigation = {navigate: () => {}};
        spyOn(navigation, 'navigate');

        const loginPage = render(<LoginScreen />);

        const goToForgotPasswordButton = loginPage.getByTestId('goToForgotPasswordButton');
        fireEvent.press(goToForgotPasswordButton);

        expect(navigation.navigate).toHaveBeenCalledWith("ForgotPassword")
    })

    it('should go to signUp screen on register click', () => {
        const navigation = {navigate: () => {}};
        spyOn(navigation, 'navigate');

        const loginPage = render(<LoginScreen />);

        const goToRegisterButton = loginPage.getByTestId('goToRegisterButton');
        fireEvent.press(goToRegisterButton);

        expect(navigation.navigate).toHaveBeenCalledWith("SignUp")
    })

})