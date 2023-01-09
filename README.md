# Social Network API

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
