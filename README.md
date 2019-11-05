# Polymer Component Agnostic Library Rollup Typescript

This is a polymer agnostic library builder
You can use 
- polymer3.0 elements in javascript
- polymer3.0 elements in typescript with decorators
- Lit elements in javascript
- Lit elements in typescript

There are 2 builds, 
One starts a dev server which serves the index.html in the root of the project. This html files points to the javascript file in the build folder
- is compiled in the build folder
- compiled with node module resolution on external dependencies which basically rewrites absolute paths to relative paths in the node_modules folder
- sourcemaps included
- .d.ts file included
- enables a server
- enables live reload which is configured to watch the build folder

The other compiles a library
- Library is compiled in the dist folder
- Library is compiled without external dependencies
- The package.json points to the index.js of the dist folder
- There are no sourcemaps in the dist folder, 
- There are .d.ts file for use with Typescript in other applications

This is a port of [here](https://github.com/PolymerLabs/start-polymer3).

VSCODE
- there are npm scripts
- rollup-dev
- rollup-library

```
npm install -g polymer-cli
git clone https://github.com/twitchax/start-polymer3-typescript.git
cd start-polymer3-typescript
npm install
npm start
```