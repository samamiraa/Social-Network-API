# Social-Network-API

Walkthrough Video 👇🏼 <br>
https://drive.google.com/file/d/1s1A9CBL98nOxLh_a3OUPo8zHfgy6XO6y/view

## Description

Socal networking app made with express, mongoDB and mongoose. My motivation to complete this assignment was to get an understanding of NoSQL and using another database. Its good to know how to do the basics with multiple databases at the very least, so this project was a good introduction to mongoDB. I learned that reading the official documentation will always be helpful and important!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

npm express<br>
npm mongoose<br>
npm dayjs<br>

## Usage

First we start off by creating a user. Next we get all users, which will get the one user we have created so far. When we search individually by id, we can also get the data for that user<br>
<br>
<img width="1200" alt="create user" src="./utils/imgs/1 add user.png"><br>
<br>
<img width="1200" alt="get all users" src="./utils/imgs/2 get users.png"><br>
<br>
<img width="1200" alt="get all users" src="./utils/imgs/2 get users.png"><br>
<br>
<img width="1200" alt="get one user" src="./utils/imgs/3 get user by id.png"><br>
<br>
Here I created more users simply so we can demonstrate adding friends<br>
<br>
<img width="1200" alt="get all users" src="./utils/imgs/4 get all users.png"><br>
<br>
Next you can update a users information. When we go back and get all users, we can see one individuals info was updated.<br>
<br>
<img width="1200" alt="update user" src="./utils/imgs/5 update user.png"><br>
<br>
<img width="1200" alt="get all users" src="./utils/imgs/6 get all users.png"><br>
<br>
Next we delete a user by their Id then get all users to see that user no longer coming back with the user data. If we search for that user with their id. It will state user does  not exist. NOTE* When deleting a user, any associated thoughts are deleted as well.<br>
<br>
<img width="1200" alt="delete user" src="./utils/imgs/7 delete user.png"><br>
<br>
<img width="1200" alt="get all users" src="./utils/imgs/8 get all users.png"><br>
<br>
<img width="1200" alt="get user by id" src="./utils/imgs/9 get user by id.png"><br>
<br>
Users are able to add friends<br>
<br>
<img width="1200" alt="add friend" src="./utils/imgs/10 add friend.png"><br>
<br>
<img width="1200" alt="get all users" src="./utils/imgs/11 get users.png"><br>
<br>
<img width="1200" alt="get user by id" src="./utils/imgs/12 get user by id.png"><br>
<br>
User friends can be deleted.<br>
<br>
<img width="1200" alt="delete friend" src="./utils/imgs/13 delete friend.png"><br>
<br>
<img width="1200" alt="get user by id" src="./utils/imgs/14 search user by id.png"><br>
<br>
Thoughts can be created under a specific user. Then we can use the route to get all thoughts created or search fo it individually with its id. When you search for the user that created the thought, you can see the thought populated under their data in the thought section<br>
<br>
<img width="1200" alt="create thought" src="./utils/imgs/15 create thought.png"><br>
<br>
<img width="1200" alt="get all thoughts" src="./utils/imgs/17 get a;ll thoughts.png"><br>
<br>
<img width="1200" alt="get thought by id" src="./utils/imgs/18 get thought by id.png"><br>
<br>
<img width="1200" alt="get user by id" src="./utils/imgs/16 get user by id.png"><br>
<br>
After a thought is created, you can update that thought<br>
<br>
<img width="1200" alt="update thought" src="./utils/imgs/19 update thought.png"><br>
<br>
<img width="1200" alt="get thought by id" src="./utils/imgs/20 get user by id.png"><br>
<br>
Thoughts can also be deleted<br>
<br>
<img width="1200" alt="delete thought" src="./utils/imgs/21 delete thought.png"><br>
<br>
<img width="1200" alt="get user by id" src="./utils/imgs/22 get user by id.png"><br>
<br>
Next a thought is added to show how reactions can be added and deleted.<br>
<br>
<img width="1200" alt="add thought" src="./utils/imgs/23 add thought.png"><br>
<br>
<img width="1200" alt="get all thoughts" src="./utils/imgs/24 get all thoughts.png"><br>
<br>
Reactions can be added to thoughts<br>
<br>
<img width="1200" alt="add reaction" src="./utils/imgs/25 add reaction.png"><br>
<br>
<img width="1200" alt="get user by id" src="./utils/imgs/26 get user by id.png"><br>
<br>
Reactions can be deleted<br>
<br>
<img width="1200" alt="delete reaction" src="./utils/imgs/27 delete reaction.png"><br>
<br>
<img width="1200" alt="get user by id" src="./utils/imgs/28 get user by id.png"><br>
<br>

## Credits

As usual, I always refer to my class activities, but thank you to my colleague Shawn and my tutor Andrew for answering my questions.

https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()<br>
https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()<br>
https://mongoosejs.com/docs/tutorials/getters-setters.html<br>
https://stackoverflow.com/questions/70724966/how-to-use-getter-or-setter-with-mongoose-timestamps<br>
https://stackoverflow.com/questions/18395412/mongodb-opposite-of-addtoset<br>


## License

The MIT License is short and to the point. It lets people do almost anything they want with your project, like making and distributing closed source versions

## Badges

N/A

## Features

N/A

## How to Contribute

N/A

## Tests

Install required dependancies, run node server.js in terminal to start the server. Go to insomnia to test out the routes!