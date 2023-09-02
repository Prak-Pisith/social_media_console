"use strict";
// Template Method Pattern
// Implement Observers (posting new content)
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoContentTemplate = exports.ImageContentTemplate = exports.TextContentTemplate = exports.ContentTemplate = void 0;
class ContentTemplate {
    constructor(user, content) {
        this.user = user;
        this.content = content;
        // Observer subjects
        this.observers = [];
    }
    getUser() { return this.user; }
    getUserName() { return this.user.name; }
    getContent() { return this.content; }
    // Observer subjects
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1)
            this.observers.splice(index, 1);
    }
    notifyObservers(message) {
        this.observers.forEach(observer => observer.updateObserver(message));
    }
    post() {
        this.createContent();
        // Trigger Observers
        this.notifyObservers(this.getContent());
    }
}
exports.ContentTemplate = ContentTemplate;
// Text Content Template
class TextContentTemplate extends ContentTemplate {
    createContent() {
        console.log(`User ${this.getUserName()} posted a caption: ${this.getContent()}`);
    }
}
exports.TextContentTemplate = TextContentTemplate;
class ImageContentTemplate extends ContentTemplate {
    constructor(user, content, image) {
        super(user, content);
        this.image = image;
    }
    createContent() {
        console.log(`User ${this.getUserName()} posted a image: ${this.getContent()} : ${this.image}`);
    }
}
exports.ImageContentTemplate = ImageContentTemplate;
class VideoContentTemplate extends ContentTemplate {
    constructor(user, content, video) {
        super(user, content);
        this.video = video;
    }
    createContent() {
        console.log(`User ${this.getUserName()} posted a video: ${this.getContent()} : ${this.video}`);
    }
}
exports.VideoContentTemplate = VideoContentTemplate;
