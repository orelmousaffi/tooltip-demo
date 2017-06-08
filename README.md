# TooltipDemo

The TooltipDemo project demonstrates the development of a reusable Angular Component which utilizes a number of core featurs.
The project utilizes a `ToolTipComponent` component which encasulates a formatted div with text, as well as a standared button attached to a directive for additional behaviour.

The button utilizes the `tooltip-btn` attribute directive controlling what tooltips are shown and hidden between each button click. Only one tooltip may be displayed at a time and pressing the same button twice will result in toggling the current tooltip. The text box also features a directive; `tooltip-popup`. This directive actively listens for scroll event changes to control the postion of the tooltip relative to the button pressed.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
