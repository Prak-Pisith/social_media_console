import { UserInterface } from "./user-interface";

// Singleton

export class UserDatabase {

  private static instance: UserDatabase | null = null;

  // Users
  private users: UserInterface[] = [];

  private constructor() {}

  static getInstance(): UserDatabase {
    if(!UserDatabase.instance)
      UserDatabase.instance = new UserDatabase();
    return UserDatabase.instance;
  }

  addUser(user: UserInterface): void {
    this.users.push(user);
  }

}