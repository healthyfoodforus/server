# Healthy Food For Us

HealthyFoodForUs is a freemium web based application that wil help users to make more informed decision on how to eat healthy food.

1. Healthy Food Recipes recommendations
2. Videos on healthy living ideas
3. Find out list of restaurants nearby based on users current location.

**General**
#### client site: http://localhost:8080/
#### server site: http://localhost:3000/


**Installation and Getting Started (execute this function to run this app in your terminal)**
```sh
$ npm init -y (inside root server folder)
$ nodemon app.js (on terminal inside root server folder)
$ live-server --host=localhost (on terminal inside root client folder)
``` 

**List of users routes:** 

| Route           | HTTP | Header(s) | Body                              | Description                     |
| --------------- | ---- | --------- | --------------------------------- | ------------------------------- |
| /users          | GET  | none      | none                              | Find a single user              |
| /users/register | POST | none      | email:String<br />password:String | Register user into the database |
| /users/login    | POST | none      | email:String<br />password:String | Login into the website          |

**List of recipe routes:**

| Route    | HTTP | Header(s) | Body                                                         | Description                            |
| -------- | ---- | --------- | ------------------------------------------------------------ | -------------------------------------- |
| /recipes | GET  | none      | Diet preference: String<br />Number of recipes to show: Integer<br /> | List recipes based on diet preference. |



**List of  zomato routes:**

| Route                         | HTTP | Header(s) | Body | Description                       |
| ----------------------------- | ---- | --------- | ---- | --------------------------------- |
| /zomato/getHealthyRestaurants | GET  | none      | none | Searach healthy restaurant nearby |



**List of videos routes:**

| Route    | HTTP | Header(s) | Body         | Description                                 |
| -------- | ---- | --------- | ------------ | ------------------------------------------- |
| /recipes | GET  | none      | title:String | Search youtube video based on keyword input |
