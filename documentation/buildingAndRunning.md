# Building and Running Picastro Locally

[Back to README](../README.md)

---
**Please note that building the iOS version is only possible via macOS devices!**


## Run on Emulator/Simulator
### For iOS Development
1. Clone the source code onto your local machine.
2. `cd` into the root project folder.
3. Run `npm install` to install dependencies.
4. `cd ios` to change to the ios folder.
5. Run `pod install` to install Xcode dependencies.
6. `cd ..` to get back to the root project folder.
7. Run the command `npx react-native start` and then press `i` when prompted .
- OR
7. Execute `npx react-native run-ios` to start the iOS Simulator and wait for the app to automatically launch.

### For Android Development
1. Clone the source code onto your local machine.
2. `cd` into the project folder.
3. Run `npm install` to install all dependencies.
4. Run the command `npx react-native start` and then press `a` when prompted.
- OR
4. Execute `npx react-native run-android` to start the Android Emulator and wait for the app to automatically launch.


## Run on Device
### Run on iOS
To build and run using Xcode, [follow the steps here.](https://reactnative.dev/docs/running-on-device?os=macos&platform=ios)
1. Plug your iOS device to your PC via USB.
2. Press `Trust` or `Allow` when prompted to allow connection between your PC and iOS device.
3. Follow steps 1-6 of `Run on Emulator/Simulator for iOS Development`.
4. Execute `npm install -g ios-deploy`.
5. Execute `npx react-native run-ios --configuration Debug --device "<YOUR DEVICE NAME>"`.
6. Wait for the build to install and automatically launch on your device upon successful installation.

### Run on Android
[Follow these steps](https://reactnative.dev/docs/running-on-device?os=windows&platform=android) to build and run the application directly for Android devices.

---
[Back to README](../README.md)
