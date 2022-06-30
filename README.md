
## Description

Monorepo project with [Nest.js](https://nestjs.com/) framework using NPM.

The source code contains a microservice that will receive and validate if a number is odd or even, and forward this request to another microservice to save those numbers into a MongoDB database via websocket.

## Project structure

We have 2 packages inside the project:
- **validation-app:** Nest.JS application. (Validate the input)
  Validate if the input value is odd or even, then forward via websocket to the server client.
- **odd_even_app:** Nest.JS application.   (Interact with  MongoDB)
  Server client to send 10 numbers in batch to MongoDB with the values emited from the server and get the last 10 numbers odd/even.
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

## Running the apps

```bash
# development
$ npm run start validation-app
$ npm run start odd_even_numbers

# watch mode
$ npm run start:dev validation-app
$ npm run start:dev odd_even_numbers
# production mode
$ npm run start:prod validation-app
$ npm run start:prod odd_even_numbers
```

