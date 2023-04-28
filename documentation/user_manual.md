# User Manual

[Back to README](../README.md)

---

There are two types of user in our mobile application. One is admin and the other is app user. We describe each user manual below.

### User Manual for an Admin User
In the Django framework, the admin panel is one of the most useful features we use as the default interface for administrators. A trusted administrator may manage content on the application using the built-in admin panel from Django that is model-based. To maintain our app, we created a super user for the admin panel so that admins can log in to the admin panel. Our backend is deployed to AWS and the live admin panel can be accessed [here](http://13.42.37.75:8000/admin). If you ran the backend server locally, then the admin panel can be accessed by going to the address `http://127.0.0.1:8000/admin`.

<p align="center"><img src="https://user-images.githubusercontent.com/99973434/235134968-04e25202-4843-4ddd-a72a-5c235dc39550.png" alt="admin panel" title="Django Admin Panel" width="450" height="300" /></p>

After the super user inputs the credentials (admin **username = "admin"** and **password = "picastro"**) into the admin login screen, the admin has access to view and manage users' registration data, and also manage the app's various models and their entries. This admin panel is only accessible to the admin user.

### User Manual for an App User

We have created an astrophotography image-sharing application that is built using React Native and can run on iOS and Android. When a new user wants to use the application, they will need to provide their credentials to sign up for a new account. 

<p align="center"><img src="https://user-images.githubusercontent.com/100229876/235009329-0c9984a4-db57-4c95-8948-6bbcffb986ff.jpg" alt="picastro_image" title="registration_part"  width="200" height="400" /></p>     
Afterwards, the user will then be redirected to the home feed, where they can browse through images that have been uploaded by another users in the Picastro community. By default, the home feed is sorted by showing the most recent posts first. 

<p align="center"><img src="https://user-images.githubusercontent.com/100229876/235008629-4d773cf1-caa6-4caa-bd19-975470578ba8.jpeg" alt="view of home feed" title="home_feed"  width="200" height="400" /> </p> 

We have also implemented a feature where users can filter the feed to only show images of a certain object type, such as ISS Transit, Lunar, Solar, Comet, Galaxy, Asternisms, Nebula, and Stars. When a user clicks on a post, they can view a detailed information about the post and the image. This feature can be accessed by tapping on the telescope icon on the bottom right, where this modal will appear: 

<p align="center"><img src="https://user-images.githubusercontent.com/100229876/235009902-48ed2679-074d-47a3-9a9b-7bdb1e416714.jpeg" alt="picastro_image" title="filter_object"  width="200" height="400" /></p> 

Users can tap on a post to get a detailed information of the post, including the image description, name of the celestial object, duration of photo exposure, the number of cloud coverage, the number of moon phase, and bortle scale. Users can also tap the image to zoom for a closer look of the image. 

<p align="center"><img src="https://user-images.githubusercontent.com/99973434/235140484-ff53a50f-9253-4e19-bdaa-d4c576f15bdd.png" alt="picastro_image" title="image_detailed"  width="200" height="400" /></p> 

Another feature of our app is the ability to upload images. Our app supports image files in the following format: png, jpg, jpeg, and tiff. Users have to provide additional details about the image and the image description. Images uploaded will be processed by our backend server and stored in our Amazon Web Services server in the cloud. 

<p align="center"><img src="https://user-images.githubusercontent.com/100229876/235010116-2fffd06c-1c42-498c-96b2-3ce1a628b781.jpeg" alt="picastro_image" title="image_upload"  width="200" height="400" /></p>


---

[Back to README](../README.md)
