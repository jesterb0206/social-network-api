# Social Network API

<br>

## License

<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[This application is under the MIT license](https://opensource.org/licenses/MIT)

<br>

## Walkthrough Video

<br>

**To-Do**

<br>

## Table of Contents

<br>

**To-Do**

<br>

## Description

<br>

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

<br>

## Usage

<br>

To create a user, make a **POST** request in Insomnia/Postman/etc. to `http://localhost:3001/api/users`, with the user's **username** and **email** in **JSON format**.

<br>

![Create User](assets/create-user.png)

<br>

To get a specific user, make a **GET** request in Insomnia/Postman/etc. to `http://localhost:3001/api/users/:userId`, replacing **:userId** with that user's unique ID.

<br>

![Get User](assets/get-user.png)

<br>

To get all of the users, make a **GET** request in Insomnia/Postman/etc. to `http://localhost:3001/api/users`.

<br>

![Get All Users](assets/get-all-users.png)

<br>

To update a specific user, make a **PUT** request in Insomnia/Postman/etc. to `http://localhost:3001/api/users/:userId` (in **JSON format**), replacing **:userId** with that user's unique ID.

<br>

![Update User](assets/update-user.png)

<br>

To delete a specific user, make a **DELETE** request in Insomnia/Postman/etc. to `http://localhost:3001/api/users/:userId`, replacing **:userId** with that user's unique ID.

<br>

![Delete User](assets/delete-user.png)

<br>

To add a friend to a user's friend list, make a **POST** request in Insomnia/Postman/etc. to `http://localhost:3001/api/users/:userid/friends/:friendId`, replacing **:userId** with that user's unique ID and **:friendId** with the unique ID of the user that they wish to become friends with.

<br>

![Add Friend](assets/add-friend.png)

<br>

To delete a friend from a user's friend list, make a **DELETE** request in Insomnia/Postman/etc. to `http://localhost:3001/api/users/:userid/friends/:friendId`, replacing **:userId** with that user's unique ID and **:friendId** with the unique ID of the user that they wish to unfriend.

<br>

![Delete Friend](assets/delete-friend.png)

<br>

To create a thought, make a **POST** request in Insomnia/Postman/etc. to `http://localhost:3001/api/thoughts`, with the user's **thoughtText**, **username** and **userId** in **JSON format**.

<br>

![Create Thought](assets/create-thought.png)

<br>

To get a specific thought, make a **GET** request in Insomnia/Postman/etc. to `http://localhost:3001/api/thoughts/:thoughtId`, replacing **:thoughtId** with that thought's unique ID.

<br>

![Get Thought](assets/get-thought.png)

<br>

To get all of the thoughts, make a **GET** request in Insomnia/Postman/etc. to `http://localhost:3001/api/thoughts`. **Note**, earlier I was having an error where when I went to create a thought the corresponding user was not found, that has since been fixed but that's why it appears like the same thought has been created many times.

<br>

![Get All Thoughts](assets/get-all-thoughts.png)

<br>

To update a specific thought, make a **PUT** request in Insomnia/Postman/etc. to `http://localhost:3001/api/thoughts/:thoughtId` (in **JSON format**), replacing **:thoughtId** with that thought's unique ID.

<br>

![Update Thought](assets/update-thought.png)

<br>

To delete a specific thought, make a **DELETE** request in Insomnia/Postman/etc. to `http://localhost:3001/api/thoughts/:thoughtId`, replacing **:thoughtId** with that thought's unique ID.

<br>

![Delete Thought](assets/delete-thought.png)

<br>

To create a reaction, make a **POST** request in Insomnia/Postman/etc. to `http://localhost:3001/api/thoughts/:thoughtId/reactions`, replacing **:thoughtId** with the thought ID of the thought you're reacting to, and with the reaction's **reactionBody**, and your **username** in **JSON format**.

<br>

![Create Reaction](assets/create-reaction.png)

<br>

To delete a reaction, make a **DELETE** request in Insomnia/Postman/etc. to `http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`, replacing **:thoughtId** with the thought Id that corresponds to the reaction you're trying to delete, and **:reactionId** with the reaction Id of the reaction you're trying to delete.

<br>

![Delete Reaction](assets/delete-reaction.png)
