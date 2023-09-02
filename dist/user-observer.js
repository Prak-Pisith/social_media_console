"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserObserver = void 0;
class UserObserver {
    constructor(userId) {
        this.userId = userId;
    }
    updateObserver(message) {
        console.log(`User ${this.userId} received a notification: ${message}`);
    }
}
exports.UserObserver = UserObserver;
