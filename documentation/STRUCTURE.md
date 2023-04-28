# Structure of the Picastro React Native Frontend

[Back to README](../README.md)

---

## General Structure of the Frontend
The relevant files for the iOS build is in the `ios` folder, whereas the relevant files for Android build is in the `android` folder.

The file `App.js` is the starting point of the application. When the user starts the application, this file will handle the loading of the next screens.

The `src` folder contains:
- `assets` folder, which stores the icons, sample images, logos, buttons, and sprites of the application.
- `components` folder, the components that we developed based on the principle of Atomic Design are separated to the respective folders. Most of the components here will be used together to build the screens/pages of the application.
- `context` folder that contains the `AuthContext.js` file. This file is utilized as the context provider for the whole application. By importing this file to any screens file, variables that are declared inside this folder can be accessed and modified through that screen file.
- `screens` folder which contains the pages that we have developed for the application.

### Some important files/folders and their functions
- `./src/context/AuthContext.js` : When used with `useContext()` function, it serves as the global context provider of the whole application. Every API calls in the application is wrapped with the `fetchInstance()` function in this file. This is done to check for the validity of the access token before proceeding with a fetch request. When the access token is expired, it will first attempt to get a new access token using the refresh token. When this process is successful, it will continue with the original fetch request. However, if this token refresh fails (e.g., due to refresh token expiry), it will redirect the user back to the login screen.
- `./src/components/navigation/` : For this application, we implemented nested navigators using the [React Navigation](reactnavigation.org) package. For more details about how nested navigators work, please click [here](https://reactnavigation.org/docs/screen-options-resolution/).

---

[Back to README](../README.md)
