const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

const getUsersWithEyeColor = (users, eyeColor) =>
  users.filter((user) => user.eyeColor === eyeColor);

console.log(getUsersWithEyeColor(users, "blue"));

// Отримати масив імен користувачів за статтю (поле gender)
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getUsersWithGender = (users, gender) =>
  users.reduce((acc, user) => {
    if (user.gender === gender) {
      acc.push(user.name);
    }
    return acc;
  }, []);

console.log(getUsersWithGender(users, "female"));

//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
  },
  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Function",
      "Git",
      "Conditions",
      "Classes",
      "GitHub",
      "DOM",
    ],
  },
  {
    name: "Intermediate JavaScript",
    topics: [
      "VSCode",
      "NPM",
      "Bundlers",
      "Transpiling",
      "Git",
      "Promises",
      "AJAX",
      "GitHub",
    ],
  },
];

const uniqueTopics = (courses) => courses
  .flatMap(cours => cours.topics)
  .filter((topic, index, topics) => topics.indexOf(topic) === index);

console.log(uniqueTopics(courses));

// Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

const client = new Client("user", "user@gmail.com");

console.log(client.login);
console.log(client.email);

client.email = "newUser@gmail.com"

console.log(client.email);

/* / Напиши класс Notes который управляет коллекцией заметок в
//свойстве items.
//Заметка это объект со свойствами id, text і priority
//Добавь классу статический метод Priopity,
//в котором будет храниться объект с приоритетами.
//Добавь методы addNote(note), removeNote(id)
//updatePriority(text, newPriority) */

class Notes {
  static Priority (){
    return {
      HIGHT: "hight",
      LOW: "low",
    }
  }

  conctructor(note, id){
    this.items = [];
  } 

  addNote(note){
    this.items.push(note);
  }

  removeNote(id){
   const index = this.items.findIndex((item) => item.id === id);
   if (index !== -1) {
    this.items.splice(index, 1)
   }
  }
  updatePriority(id, newPriority){
   const newIndex  = this.items.findIndex((item)=>item.id ===id);
    if(index !== -1) {
      this.items[newIndex].priority = newPriority;
    }  
  }

};

const note1 = new Notes();
console.log(note1);
/*note1.addNote({ text: "Note1", id : 1, priority: Notes.Priority().LOW });*/
note1.addNote({ text: "Note2", id : 2, priority: Notes.Priority().LOW });
note1.addNote({ text: "Note3", id : 3, priority: Notes.Priority().LOW });
console.log(note1.items);
note1.updatePriority( id = 1, Notes.Priority().HIGHT );


