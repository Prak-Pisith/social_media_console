import { ImageContentTemplate, TextContentTemplate } from "./content-template";
import { UserDatabase } from "./user-database";
import { UserInterface } from "./user-interface";
import { UserObserver } from "./user-observer";

// Create User Database - Singleton
const userDB = UserDatabase.getInstance();

// Create Users
const ben: UserInterface = {id: 1, name: "Ben"};
const quen: UserInterface = {id: 2, name: "Quen"};
const bob: UserInterface = {id: 3, name: "Bob"};

// Add User into Database
userDB.addUser(ben);
userDB.addUser(bob);
userDB.addUser(quen);

// Create Post Content 1
const content1 = new TextContentTemplate(ben, 'Hello MF!');

// Set Observers for Content 1
content1.addObserver(new UserObserver(quen.id));
content1.addObserver(new UserObserver(bob.id));

// Post Content 1
content1.post();

// Create Post Content 2
const content2 = new ImageContentTemplate(quen, 'See you there!', 'www.image.com' );

// Set Observers for Content 2
content2.addObserver(new UserObserver(ben.id));
content2.addObserver(new UserObserver(bob.id));

// Post Content 2
content2.post();
