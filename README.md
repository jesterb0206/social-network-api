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

- [Social Network API](#social-network-api)
  - [License](#license)
  - [Walkthrough Video](#walkthrough-video)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Badges](#badges)
  - [Questions](#questions)
    - [GitHub](#github)
    - [Email](#email)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

<br>

## Description

<br>

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Social Network API uses Express.js for routing, a MongoDB database, the Mongoose ODM and Moment.js to format timestamps on query. Also, the API routes were tested using Insomnia.

<br>

## Installation

<br>

Clone the repository to your local machine, open your terminal, and navigate to the root folder in the **Social Network API** repository. To install the necessary dependencies, run `npm i` in your command-line terminal.

<br>

## Usage

<br>

To begin running the application, open your terminal, navigate to the root folder in the **Social Network API** repository, and run `npm start`. Also, make sure you have MongoDB installed!

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

<br>

## Badges

<br>

![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

<br>

![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

<br>

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

<br>

![Insomnia](https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white)

<br>

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

<br>

![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)

<br>

![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

<br>

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

<br>

![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

<br>

![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

<br>

![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

<br>

## Questions

<br>

If you have any additional questions, you can reach me at:

<br>

### GitHub

<br>

![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

<br>

[jesterb0206](https://www.github.com/jesterb0206)

<br>

### Email

<br>

![Microsoft Outlook](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)

<br>

jesterb@seattleu.edu

<br>

<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=jesterb0206&hide_border=true&border_radius=5&theme=gruvbox&locale=en&show_icons=true&layout=compact&langs_count=10" alt="jesterb0206" /></p>

<br>

<p><img align="left" src="https://github-readme-stats.vercel.app/api?username=jesterb0206&hide_border=true&border_radius=5&theme=date_night&locale=en&show_icons=true" alt="jesterb0206" /></p>

<br>

[![GitHub Streak](https://streak-stats.demolab.com?user=jesterb0206&hide_border=true&border_radius=5&theme=submarine-flowers)](https://git.io/streak-stats)

<br>
