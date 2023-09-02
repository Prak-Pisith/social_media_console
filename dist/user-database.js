"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabase = void 0;
// Singleton
class UserDatabase {
    constructor() {
        // Users
        this.users = [];
    }
    static getInstance() {
        if (!UserDatabase.instance)
            UserDatabase.instance = new UserDatabase();
        return UserDatabase.instance;
    }
    addUser(user) {
        this.users.push(user);
    }
}
exports.UserDatabase = UserDatabase;
UserDatabase.instance = null;
