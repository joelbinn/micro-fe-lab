# TeamDoodle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.

## Overview
This project is an example of a Micro Frontend that exposes itself with Custom Elements

- It shall provide a widget as a custom HTML tag
- It shall provide a page as a custom HTML tag. This page has local navigation with sub-routing

In order to make it a web component and still be able to develop it in isolation the usual 
root module _AppModule_ is separated into
- [WebComponentAppModule](src/app/web-component-app.module.ts), which handles registration of the 
  exposed components as Custom Element:s. This module is used in the production environment and 
  performs no bootstrapping. 
- [DevAppModule](src/app/dev-app.module.ts), which bootstraps the [DevAppComponent](src/app/dev-app.component.ts).
  This module includes the `WebComponentAppModule`.

In [main.ts](src/main.ts) the choice of which module to bootstrap is made based on the environment.

In this way the `DevAppModule` is used when running the development server, but in the production build
the `WebComponentAppModule` is used.



### Build distro
To build distro bundle as a single .js-file, run 
```shell
$ npm run package
```

This produces the file `./dist/team-doodle.js` which can be served by a server of choice.

Now, in this fake setup we serve it locally and to do that run:
```shell
$ npm run serve:prod
```
Which exposes the .js-file at [http://localhost:3013/team-doodle.js](http://localhost:3013/team-doodle.js)
so that it can be included by the _[app shell](../app-shell/public/index.html)_.

 
 
