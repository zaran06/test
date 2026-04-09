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

class Admin extends User {
  constructor(name, role) {
    super(name)
    this.role = role;
  }

  deletePost() {
    console.log(`Администратор ${this.name} (роль: ${this.role}) удалил пост.`);
  }
}

const myAdmin = new Admin("Андрей", "Superuser");

myAdmin.status();
myAdmin.deletePost();