# api-communication-sample

This application was made in ReactJS with Cordova and it's purpose is to demonstrate communication between client-side and GM API

The first screen is the login one, where you should provide valid  server, username and password.

After that the user is prompted to a screen that list all the organizations of the server.

There are basically two API calls: the initial auhtentication (POST) and the one to the organization endpoint (GET).

# Steps to run:

* App React JS:
  * Clone repository
  * yarn install
  * yarn start

* Android APP:
  * Clone repositório
  * cordova platform add android
  * cordova build android
  * cordova run android
