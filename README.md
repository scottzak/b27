# B27

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.  After cloning, run the following:
- `nvm use v8.9.3` -- We want the latest stable version of Node.js
- `npm install` to download and install dependencies from package.json
- Set your environment variable named AWS_WEBSERVER_BUCKET to the name of your s3 bucket that will serve the website.

## Development server

Run `npm start` for a dev server. The development server is built to listen on all ports (0.0.0.0) on port 8080, as is required by the AWS Cloud 9 development environment. You can then use the default settings and browse through Cloud9 by using `Preview > Preview Running Application` from the main menu. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

There is a 'deploy' script in package.json to build and deploy the package to the bucket desgnated in AWS_WEBSERVER_BUCKET.  Run `npm run deploy` to push it out.

## Running unit tests

Angular uses 'karma' and 'jasmine' to run automated testing.  If all of the supporting packages are installed correctly, this is how to run tests on your development server.
- Make sure no other server is running.
- Open a new terminal and run `npm test`
- Open your Cloud9 browser (`Preview > Preview Running Application`).
- Your test results should appear at the top of the browser window and be logged in terminal

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
