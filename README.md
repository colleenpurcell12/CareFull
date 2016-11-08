# CareFull

CareFull is an e-commerce app for sending gift boxes to friends and family.

## See me in action at https://stormy-forest-41556.herokuapp.com/products

## I need node >= 6.7.0

## To run CareFull
```
npm install
npm run build-watch
npm start
```

## My anatomy

`/app` has the React/Redux setup. `main.jsx` is the entry point.

`/db` has the Sequelize models and database setup. It'll create the database for you if it doesn't exist,
assuming you're using postgres.

`/server` has the Express server and routes. `start.js` is the entry point.

`/bin` has scripts. (Right now it has *one* script that creates a useful symlink.)
