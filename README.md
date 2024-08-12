# finance-dashboard

## Technologies used

for frontend
```
Vue 3
```

for desktop integration (backend)
```
electron.js
```

for db
```
sqllite3
```

## Steps followed initially

```
cd finance-dashboard
vue create .
```
```
npm install sqlite3 --save
```

Add electron builder using below. It adds plugin vue-cli-plugin-electron-builder and creates a main (background.js) automatically which is the main defined inside package.js
```
vue add electron-builder
```

documentation about electron: https://github.com/electron/electron/tree/v31.3.1/docs#readme

## To build the project
Build the Vue.js application:
```
npm run build
```

Install Electron builder:
```
npm install electron-builder --save-dev
```

Run the Electron build:
```
npm install electron-builder --save-dev
```
This will generate a distributable package for the desktop app.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
