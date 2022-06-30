
## Description

Monorepo project with [Nest.js](https://nestjs.com/) framework using NPM.

The source code contains an microservice that will receive and validate if a number is odd or even, and forward this request to another microservice to save those numbers into a MongoDB database via websocket.

## Project structure

We have 2 packages inside the project:
- **validation-app:** Nest.JS application. (Validate the input)
- **odd_even_app:** Nest.JS application.   (Interact with the DB)

```
|- package.json 
|--- packages
|------ validation-app
|------ odd_even_app
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

