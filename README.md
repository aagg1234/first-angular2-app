# first-angular2-app

## Polyfills and shims
Libraries that provide a new standard of javascript objects or functions to old browsers are called **polyfills** or **shims**. 
Examples are: `core-js`, `es6-shim`


## Typescript
To enable the compilation of typescript to javascript, so that a browser can run it, there must be installed a typescript compiler by npm.
```
npm install --save-dev typescript
```
The typescript compiler needs some configuration that is setup in the following file:
```
tsconfig.json
```
The executable 
```
./node_modules/bin/tsc --inputDir src --outhDir dist
```

## Webpack
Installation
```
npm install --save-dev webpack
```
Webpack cannot directly process typescript files, so there must be used a specific loader for them.
```
npm install --save-dev ts-loader
```

## Link to tutorials
[https://www.youtube.com/channel/UC6nvw2BnNYSKQoffXQtxICQ]
