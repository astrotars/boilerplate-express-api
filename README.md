# Boilerplate Express API (REST)

🔋Boilerplate Express API (REST) w/ Support for ES6 Features

## Getting Started

### Step 1
`git clone git@github.com:nparsons08/boilerplate-express-api.git api`

### Step 2
`cd api && yarn build && yarn start`

### Step 3
`open https://localhost:3000`

## Building
All code lives in the `/src` directory. To build the API, run `yarn build` from the root of the directory. This will call `build.sh` and transpile all E6S JavaScript to vanilla JavaScript. The transpiled code will then be in the `/dist` directory.

## Running the API
To run the API, use `yarn start` from the root of the directory. The API will spin up on port `3000` and provide you with feedback in the terminal.

## Docker Support
To build a Docker image and launch it, all you have to do is run `./Docker.sh`. Note: Make sure to run `yarn build` prior to building your Docker image.

## Blog Posts
Coming Soon!

**Happy Coding!**


