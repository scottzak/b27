# B27

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.  After cloning, run the following:
- `nvm use v8.9.3` -- We want the latest stable version of Node.js
- `npm install` to download and install dependencies from package.json
- Set your environment variable named AWS_WEBSERVER_BUCKET to the name of your s3 bucket that will serve the website.

## Development server

Run `ng serve` for a dev server. The development server is built to listen on all ports (0.0.0.0) on port 8080, as is required by the AWS Cloud 9 development environment. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

There is a 'deploy' script in package.json to build and deploy the package to the bucket desgnated in AWS_WEBSERVER_BUCKET.  Run `npm run deploy` to push it out.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
