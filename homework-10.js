class User {
  constructor(name) {
    this.name = name;
  }

  status() {
    console.log(`${this.name} сейчас в сети`);
  }
}
class Blogger extends User {
  constructor(name, followers) {
    super(name)
    this.followers = followers;
  }

  createPost() {
    console.log(`${this.name} выложил пост для ${this.followers} подписчиков`);
  }
}

const myBlogger = new Blogger("Иннокентий", 100);

myBlogger.status();
myBlogger.createPost();