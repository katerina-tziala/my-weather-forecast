# My Weather Forecast
A Weather Forecast Single Page Application utilizing the [OpenWeather API](https://openweathermap.org/api).
</br>Access the My Weather Forecast App here: [MY WEATHER FORECAST](https://my-weather-forecast-demo.herokuapp.com/).

## Technologies
Here’s a high level list of the technologies used for this app:

* **Angular version 12.0.4**:  [Angular CLI](https://github.com/angular/angular-cli) for the development of the frontend.

* **[Tailwind](https://tailwindcss.com/)**: A utility-first CSS framework to create a user friendly and eye appealing interface.

* **NodeJS and Express**: For the development of a simple server to serve static files.

* **[Heroku](https://www.heroku.com)**: A cloud platform to deploy the app on the internet.

## Features

- Wheather Forecast Page
  In this page the user can see a list of five cities (Amsterddam Thessaloniki, Viewnna, Lisbon, Milan) with the current weather details (temperature and wind speed);

- Wheather Forecast City Page
  In this page the user can see the weather forecast of a city for the rest of the day and four - five days ahead;

- Users can share the link of any page, with a different user. The link navigates the receiving user to the page with correct results displayed, preserving the state of the page.

- Responsive Design

## Running the App Locally

1. Fork and clone this repository.

2. To install the dependencies of the app, run in this directory:

    ```
    npm install
    ```

    or

    ```
    npm i
    ```
    

3. To start the app, run  in the project directory:

    ```
    ng serve
    ``` 

4. Access the app locally at: http://localhost:4200/

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Lint

Run `ng lint` to lint the project.



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

To run the production build app run:

   ```
    npm start
    ```






//////





## Future Improvements
- Implementation of a search field / typeahead dropdown checkbox list, to allow the user to select multiple cities in the *Weather Forecast Page*.

- Convert it to a PWA app
  
  - Implementation of a Manifest to prompt users install the app when accessing it through their mobiles

  - Implementation of a Service Worker for Offline-First capability and caching static files
  
- Unit and End to End Testing.

- Improve, document and implement the eslint rules in order to:
  
  - Define the code styling of the project and have clear consistent coding conventions

  - Maintain the code quality with ease

- Add Git Hooks to enforce and ensure the selected coding conventions and the quality of the app (tests)
  




## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
