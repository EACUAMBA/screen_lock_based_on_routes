# Screen Lock Based on Routes
## [Local Authentication](https://docs.expo.dev/versions/latest/sdk/local-authentication/)
## [React Navigation](https://reactnavigation.org/)

# How to do it?
Install the React Navigation Native, a lib to help us do the native navigation in Android and IOS OS. 
````bash
npm install @react-navigation/native
````

then install the Native Stack
````bash
npm install @react-navigation/native-stack
````

then install the expo-local-authentication
````bash
npx expo install expo-local-authentication
````

then you need to add some config in your app.json
````json
{
  "expo": {
    "plugins": [
      [
        "expo-local-authentication",
        {
          "faceIDPermission": "Allow $(PRODUCT_NAME) to use Face ID."
        }
      ]
    ]
  }
}

````

and you are ready to start develop, but before run the app for the first time, we need to set up the directories structure we are going to use.

{project_root}/src/screens/ -> Save here the screens of your application.

