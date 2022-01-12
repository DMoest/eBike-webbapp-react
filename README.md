[![Node.js CI](https://github.com/Den-geografiska-oredan/eBike-webbapp-react/actions/workflows/node.js.yml/badge.svg)](https://github.com/Den-geografiska-oredan/eBike-webbapp-react/actions/workflows/node.js.yml)

# Building and Running the app

## Installing Cordova
To get started with building and running the application you need to ensure that Cordova is installed on your system. To do this you can run:

On Linux/Mac

    sudo npm install -g cordova

On Windows

    npm install -g cordova

## Installation
The application is build with react and can be built to run on Android of Ios device thorugh cordova with the help of the react-cordova package. Before building the app install this package globally with:

    npm install -g react.cordova

Then install all required dependencies with:
    npm install

## Add desired platforms for the Cordova application
To be able to run the application on Android devices use:
    
    cordova platform add android

If you want run on ios devices use:

    cordova platform add ios

If you want to be able to run on both devices use both of the above commands.

## Build the appliction
You can now build the application for the desired platforms by using:

    npm run build

## Run the application
Befor running the application you must have a device available. either by an emulator via Android Studio och Xcode or by running the application with the help av th VS-Code extension cordova-tools. The latter simulates the desired platform in a browser window.

To launch the application you can now use:

    cordova run <platform>





