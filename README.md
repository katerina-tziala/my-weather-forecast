#  ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) `#1589F0` <img src="https://github.com/katerina-tziala/my-weather-forecast/blob/master/src/assets/logo/android-chrome-192x192.png" alt="app logo" width="44" height="44" align="left">My Weather Forecast

A Single Page Application for displaying the weather forecast utilizing the [OpenWeather API](https://openweathermap.org/api).
</br>Access the app here: [My Weather Forecast](https://my-weather-forecast-demo.herokuapp.com/).

## Technologies

Here’s a high level list of the technologies used for this app:

- **Angular version 12.0.4**: [Angular CLI](https://github.com/angular/angular-cli) for the development of the frontend

- **[Tailwind](https://tailwindcss.com/)**: A utility-first CSS framework to create a user friendly and eye appealing interface

- **NodeJS and Express**: For the development of a simple server to serve static files

- **[Heroku](https://www.heroku.com)**: A cloud platform to deploy the app on the internet

## Features

- Wheather Forecast Page
  In this page the user can see a list of five cities (Amsterddam Thessaloniki, Viewnna, Lisbon, Milan) with the current weather details (temperature and wind speed)

- Wheather Forecast City Page
  In this page the user can see the weather forecast of a city for the rest of the day and four - five days ahead

- Users can share the link of any page, with a different user. The link navigates the receiving user to the page with correct results displayed, preserving the state of the page

- Responsive Design

## Running the App Locally

1. Fork and clone this repository

2. To install the dependencies of the app, run in this directory:

   ```
   npm install
   ```

   or

   ```
   npm i
   ```

3. To start the app, run in the project directory:

   ```
   ng serve
   ```

4. Access the app locally at: http://localhost:4200/

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`

## Lint

Run `ng lint` to lint the project and enforce the applied coding styles

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. The production build of the app is included in the `dist/app` directory.

To run the app that is ready for production run:

```
npm start
```

## App Architecture

This app has two main routes **_weather-forecast_** abd **_weather-forecast/city_**. For each route the respective module is loaded when required, thus achieving lazy load. It is also easier that way to extend each module separately, by adding features, subroutes, etc.

The **_shared_** folder includes the code that is shared among the two modules and has two subfolders:

- **shared-services**: Includes the services that are shared among the modules. In this case there is only one service, the _WeatherForecastService_ which is responsible for fetching the data.
- **presentational-components**: Includes the presentational components (components with the single responsibility to present the data with no logic at all) that are shared among the modules.

The **_routes_** folder includes the modules for the routes f the app:

- **weather forecast**: The module to display the list of the selected cities with the current weather overview.This module is used as the main module of the app.
- **city-forecast**: The module to display the weather forecast of the selected city. This module has also an extra presentational component (daily-forecast) which is responsible for displaying the list of the weather forecast of each day. Since this component is not used elsewhere, it is placed under this folder.

## Future Improvements

- Add loaders and error messages/notifications to notify user for the state of the app

- Implementation of a search field/typeahead dropdown checkbox list, to allow the user to select multiple cities in the _Weather Forecast Page_

- Implementation of a dropdown select, to allow the user select the preferable units of measurement for the weather data (Celsius, Fahrenheit, Kelvin).

- Implementation of a Service Worker for Offline-First capability and caching static files

- Configuration of the app theming

- Improve, document and implement the eslint rules in order to:

  - Define the code styling of the project and have clear consistent coding conventions

  - Maintain the code quality with ease

- Implement End to End Testing //city forecast, weather forecast

- Add Git Hooks to enforce and ensure the selected coding conventions and the quality of the app (tests)

- Set up CI/CD

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
