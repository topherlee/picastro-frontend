# Deploying the Application to TestFlight (iOS)

[Back to README](../README.md)

---

The team has not deployed the app onto the App Store and Google Play Store because it is still in development process. However, Picastro has been deployed to TestFlight for beta testing purposes on iOS devices. 

## Prerequisites
- A macOS device (iOS deployment is only possible via macOS devices!)
- Xcode installation
- The React Native project code running on the local machine
- Enrollment into [Apple Developer Program](https://developer.apple.com/programs/)

## Deploying the Application
1.	Create a distribution certificate and provisioning profile for Picastro in the [Apple Developer Center](https://developer.apple.com/account/resources/certificates/list).
2.	Open the React Native project (file ‘Picastro.xcworkspace’ inside of folder ios) in Xcode.
3.	In Xcode, login to your Apple ID account that is enrolled to the Apple Developer Program.
4.	Set the build settings for the project by selecting Picastro in the Project Navigator and selecting the "Build Settings" tab.
5.	Under "Code Signing," select the previously created distribution certificate and provisioning profile.
6.	Modify the app version and build number accordingly.
7.	Archive app by selecting "Product" from the menu bar, then "Archive."
8.	Once the archive is complete, select "Distribute App" and then "App Store Connect."
9.	Submit the application to be reviewed by Apple.
10.	Once the app has been approved, go to [App Store Connect](https://appstoreconnect.apple.com) > "My Apps" > Picastro > "TestFlight" tab and select "Add New Build."
11.	Select the build that has just been uploaded and follow the steps to add it to a beta testing group or make it available to all testers.

--- 

[Back to README](../README.md)
