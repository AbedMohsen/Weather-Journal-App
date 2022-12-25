# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

## Development
Started by setting up the server-side app with the needed configurations, such as Express, Body-Parser, Cors, and Port from the terminal. Then, I have added a GET and POST routes to return and add incoming data. Afterwards, I have acquired API credentials from OpenWeatherMap website as well as a GET request to the API. Finally, I chained Promise that makes a POST request to add the API data, as well as data entered by the user, to the app.