# The App Shell

This is the app shell the includes the other micro frontends.

Each frontend is included in [index.html](public/index.html):

```html

<script src="http://localhost:3011/team-decide.js" async></script>
<script src="http://localhost:3012/team-inspire.js" async></script>
<script src="http://localhost:3013/team-doodle.js" async></script>
```

The [App](src/App.tsx) component has routes to each micro-fronten page.

In order to make the Typescript compiler happy type definitiona for each Custom Element is specified
in [react-app-env.d.ts](src/react-app-env.d.ts).

## Run

In order to run the application, first start the micro frontends.

Open one terminal and do

```shell
$ cd team-decide
$ npm install
$ npm start
```

Open another terminal and do

```shell
$ cd team-inspire
$ npm install
$ npm start
```

Open a third terminal and do

```shell
$ cd team-doodle
$ npm install
$ npm run serve:prod
```

Finally start the app shell

```shell
$ cd app-shell
$ npm install
$ npm start
```

Then open the application at [http://localhost:3000](http://localhost:3000)

## Application structure

The application is build around an App Shell and four micro frontends

- Team Decide, a pure JS application
- Team Insipre, another pure JS application, but with sub routing
- Team Doodle, an Angular application
- Team Noodle, a React application

```puml
rectangle appshell as "App Shell" 
rectangle teamdecide as "Team decide"
rectangle teaminspire as "Team Inspire"
rectangle teamdoodle as "Team Doodle"
rectangle teamnoodle as "Team Noodle"

appshell ..> teamdecide
appshell ..> teaminspire
appshell ..> teamdoodle
appshell ..> teamnoodle
```

The page content is structured as follows

```puml
rectangle App {
   rectangle teamdoodlewidget as "<tdo-widget>" {
   }
   rectangle pagearea as "Router outlet (only one component is visible)" {
       rectangle teamdecidepages as "<decide-pages/>" {
       }
       rectangle teaminspirepages as "<inspire-pages/>" {
       }
       rectangle teamdoodlepage as "<tdo-page/>" {
       }
   }
}

teamdoodlewidget .[hidden]down.> pagearea

```

In order to load AMD files, use requirejs.

Kolla in [https://github.com/chriskitson/micro-frontends-with-web-components](https://github.com/chriskitson/micro-frontends-with-web-components)

Problem med SPA+Micro FE:
- Globala definitioner läcker
- Sub routing
- Parallell: Applikationsserver
  - Gemensam bottenplatta -> JVM
  - Klassladdarhierarki, men man kan ända få versionskrockar
- Webpack
  - Module federation
