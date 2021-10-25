# Zoo Adventures

### Zoo Adventures explained

Zoo Adventures is an app that allows a child to create a list of animals they would like to see at the zoo. This app is a great learning and bonding tool for both children and parents.

## Setup: Follow these steps exactly

1. Open the terminal and clone the repository `git@github.com:KatieJohns112/zoo-adventures.git`.
1. In order to begin serving the project `cd` into `zoo-adventures`.
1. Type `npm install` and wait for all dependencies to be installed.
1. After installing the dependencies, in the zoo_adventures directory run `npm start` to serve on your local host. This should serve in localhost: 3000.
1. In a separate window in the temrinal `cd` into `zoo-adventures`.
1. `cd` into `api/` and type `json-sever -p 8088 -w database.json`.
1. Serve `localhost:8088` in the web browser to retrieve data from the database.

## How to navigate Zoo Adventures

Upon serving the correct hosts through your browser, you will be prompted with an option to sign in or register as anew user. You will need to register as a new user.

After creating your account, you will notice five nav bar selections allowing users to navigate to home, animal list, reviews, locations or events.

You can begin creating your animal list by navigating to the `Animal List` link in the nav bar. After selecting the create new animal button , you will be prompted with a form to create a new animal using an image, name, zoo location and any knowledge you would like to know about the animal.

Once you have have created an animal using the `create new animal` form it will populate under the `animal list` link in the navbar. You will alos have the ability to edit or remove an animal if so desired.

## Documentation

| [dbdiagram](./src/images/zoo-adventures-dbdiagram.png) | [wireframe](./src/images/zoo-adventures-wireframe.png) 