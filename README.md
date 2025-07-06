## Node Express Api

### Installations

- 1. The first thing i need is to download \*NodeJS from nodejs.org
-       It allow javascript to be run else where other than the chrome or other browser

- 2. I install express into the node project `npm install express --save`

- 3. I install postman on my system. It will help us make request to our API to test our endpoint

- 4. Install Visual Studio Code for writing my code and testing of the result on the Terminal

### Javascript Application

- 1. run `npm init -y` on the terminal and these will create a package.json file

- 2.  I add type module to package.json file to be able to use import for express

- 3.  I import bodyParse from 'body-parser' these all us to take in POST request body from our API

- 4.  We initialized the app `const app = express()` the app holds all our application

- 5.  I use `const PORT = 5000` to host the application on the localhost

- 6.  Then we use `app.use(bodyParse.json())` these shows that we are going to use Json file

- 7. We need to make our application to listen to incoming request `app.listen(PORT, () =>
console.log(`Server is running on port: http://localhost:${PORT}`));`

- 8. We install nodemon to keep updating the app without closing and starting the app again
     by install nodemon package `npm install --save-dev nodemon`

- 9. To use nodemon package in your app we need to set our scripts in the package.json to start
     `"start": "nodemon index.js"` each time we make changes nodemon will start the app

### Express and Nodejs routing

- 1. We need to create a route to hold all our request and response
- 2. The route hold all our request and response use GET,POST,UPDATE and DELETE.
- 3. We all create a function on the controllers to hold each of the request and response from the server


### Examples

- 