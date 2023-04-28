# User Manual and Maintenance of the Application

In this chapter, we will discuss the user manual and maintenance of our app. We have provided a **README.md** file on GitHub that explains the required steps to properly run the frontend and backend server on a local machine.

#### 15.1 User Manual

There are two types of user in our mobile application. One is admin and another one is app user. We describe below each user manual.

#### 15.1.1 User Manual for an Admin User
In the Django framework, the admin panel is one of the most amazing features we use as the default interface for administrators. A trusted administrator may manage content on an application using a perfect interface that is model-based once it receives information from the app's models. To maintain our app, we created a 
superuser for the admin panel so that admin can login.

<img src="https://user-images.githubusercontent.com/99973434/234333271-35e6cb0d-84fb-4084-a653-41b059540edb.png" alt="whatever you want" title="whatever you want"      width="450" height="150" />

After the super user inputs the credentials (admin **username = "admin"** and **password = "picastro"**) into the admin login screen, the admin has access to control the
app's contents for various models. This admin panel is only accessible to the admin user.

#### 15.1.2 User Manual for an App User

We have created an astrophotography image-sharing application that is built using React Native and can run on iOS and Android. When a new user wants to use the application, they will need to provide their credentials to sign up for a new account. After this is done, the user will  then be taken into the home feed, where
they can browse through images that have been uploaded by another users in the Picastro community.<br> 
User can view most recent post. We have also implemented a feature where users can filter the feed to only show images by certain object type, such as planets.They 
can also choose different type of objects like, ISS Transit,Lunar, Solar, Comet, Galaxy,Asternisms, Nebula and Starts. When a user clicks on a post, they can view a detailed information about the post and the image. Users can also zoom into the image to get a closer look of the image. Another feature of our app is the ability to upload images. But in our app will support png, jpg,jpeg and tiff image format. Users can choose the image to be uploaded and provide additional details about the image. Images uploaded will be processed by our back-end server and stored in our Amazon Web Services server in the cloud. Users can go to their own profile and view images that they have uploaded before.

 <img src="https://user-images.githubusercontent.com/100229876/235009329-0c9984a4-db57-4c95-8948-6bbcffb986ff.jpg" alt="picastro_image" title="registration_part"  width="100" height="200" />                   <img src="https://user-images.githubusercontent.com/100229876/235008629-4d773cf1-caa6-4caa-bd19-975470578ba8.jpeg" alt="picastro_image" title="home_feed"  width="100" height="200" />     <img src="https://user-images.githubusercontent.com/100229876/235009902-48ed2679-074d-47a3-9a9b-7bdb1e416714.jpeg" alt="picastro_image" title="filter_object"  width="100" height="200" />   <img src="https://user-images.githubusercontent.com/100229876/235010297-fa99a0ec-7cbc-4eab-8c44-017ca1b27276.jpeg" alt="picastro_image" title="zoom_image"  width="100" height="200" />  <img src="https://user-images.githubusercontent.com/100229876/235010592-5b625050-b522-4dca-b73a-b336b4e62bc7.jpeg" alt="picastro_image" title="image_detailed"  width="100" height="200" />     <img src="https://user-images.githubusercontent.com/100229876/235010116-2fffd06c-1c42-498c-96b2-3ce1a628b781.jpeg" alt="picastro_image" title="image_upload"  width="100" height="200" />
 



#### 15.2 Maintenance Manual – Installation Requirements and Procedure to Run the App Backend:
**Backend:** For our mobile app backend, we used Django for our backend API. That means we took the data from our database and will serve it in an adjacent format to our frontend. Our team used the Django rest framework which is another library on top of Django. Django Rest framework helped us build our API. The combination of Django and Django Rest framework is so powerful. However, we have a GitHub repository for the backend which is necessary to clone the code onto a local machine for maintenance purposes. After cloning our local machine, we need to install some packages to run the app backend. In this GitHub **(https://github.com/UoA-CS551R/Team-Bravo-2023-backend.git),** there is a **README.md** file that gave instructions for package installation..But most important one command, you can install all  requirements at once with the command **pip install -r requirements.txt**.
In our **Team-Bravo-2023-backend** have one folder **documentation**, here we created three files **running.md, structure.md, and testing.md.** 
We also linked  three files with **README.md**. <br>
**running.md** for the first time, the detailed discussion on  building and running the Picastro Django-Rest-Backend has been provided. We also described future development.<br>
**structure.md** for details about the structure of the Picastro Django-Rest-Backend.<br>
**testing.md** for details about testing the Picastro Django-Rest-Backend.<br>
If anyone follows this **documentation** folder they can easily maintenance our project.<br>
**Frontend:** Our team members used react-native for mobile applications. It’s the version of react. Building a mobile app, we wrote JavaScript, and it compiled into react. When we will start working with react then we will be able to see our application running on your mobile device or in an emulator. But, First, we should set up all dependencies. We need to use this link **(https://reactnative.dev/docs/environment-setup)** to set up the app environment. For the frontend, we have also another GitHub repository **(https://github.com/UoA-CS551R/Team-Bravo-2023.git)**. There is a **README.md** file that helps us install all requirements. In this file, our team members describe both android and iOS building and running applications.
