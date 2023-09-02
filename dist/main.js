"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const content_template_1 = require("./content-template");
const user_database_1 = require("./user-database");
const user_observer_1 = require("./user-observer");
// Create User Database - Singleton
const userDB = user_database_1.UserDatabase.getInstance();
// Create Users
const ben = { id: 1, name: "Ben" };
const quen = { id: 2, name: "Quen" };
const bob = { id: 3, name: "Bob" };
// Add User into Database
userDB.addUser(ben);
userDB.addUser(bob);
userDB.addUser(quen);
// Create Post Content 1
const content1 = new content_template_1.TextContentTemplate(ben, 'Hello MF!');
// Set Observers for Content 1
content1.addObserver(new user_observer_1.UserObserver(quen.id));
content1.addObserver(new user_observer_1.UserObserver(bob.id));
// Post Content 1
content1.post();
// Create Post Content 2
const content2 = new content_template_1.ImageContentTemplate(quen, 'See you there!', 'www.image.com');
// Set Observers for Content 2
content2.addObserver(new user_observer_1.UserObserver(ben.id));
content2.addObserver(new user_observer_1.UserObserver(bob.id));
// Post Content 2
content2.post();
