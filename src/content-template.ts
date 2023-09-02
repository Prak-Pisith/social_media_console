// Template Method Pattern
// Implement Observers (posting new content)

import { ObserverInterface, ObserverSubject } from "./observer";
import { UserInterface } from "./user-interface";

export abstract class ContentTemplate implements ObserverSubject {

  // Observer subjects
  private observers: ObserverInterface[] = [];

  constructor(private user: UserInterface, private content: string) {}

  getUser(): UserInterface {return this.user;}

  getUserName(): string {return this.user.name;}

  getContent(): string {return this.content;}

  abstract createContent(): void;

  // Observer subjects
  addObserver(observer: ObserverInterface): void {
    this.observers.push(observer);
  }
  removeObserver(observer: ObserverInterface): void {
    const index = this.observers.indexOf(observer);
    if(index !== -1) this.observers.splice(index, 1);
  }
  notifyObservers(message: string): void {
    this.observers.forEach(observer => observer.updateObserver(message));
  }

  post(): void {
    this.createContent();
    // Trigger Observers
    this.notifyObservers(this.getContent());
  }
}

// Text Content Template
export class TextContentTemplate extends ContentTemplate {

  createContent(): void {
    console.log(`User ${this.getUserName()} posted a caption: ${this.getContent()}`);
  }

}

export class ImageContentTemplate extends ContentTemplate {

  constructor(user: UserInterface, content: string, private image: string) {
    super(user, content)
  }

  createContent(): void {
    console.log(`User ${this.getUserName()} posted a image: ${this.getContent()} : ${this.image}`);
  }

}

export class VideoContentTemplate extends ContentTemplate {

  constructor(user: UserInterface, content: string, private video: string) {
    super(user, content);
  }

  createContent(): void {
    console.log(`User ${this.getUserName()} posted a video: ${this.getContent()} : ${this.video}`);
  }  
}

