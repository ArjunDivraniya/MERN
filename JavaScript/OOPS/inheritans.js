// Parent Class - Animal
// class Animal {
//     #isAlive;

//     constructor(name, species) {
//         this.name = name;
//         this.species = species;
//         this.#isAlive = true;
//     }

//     makeSound() {
//         return `${this.name} makes a sound.`;
//     }

//     eat(food) {
//         return `${this.name} is eating ${food}.`;
//     }

//     sleep() {
//         return `${this.name} is sleeping.`;
//     }

//     getInfo() {
//         return `Name: ${this.name}, Species: ${this.species}, Alive: ${this.#isAlive}`;
//     }
// }

// // Child Class - Dog (Extends Animal)
// class Dog extends Animal {
//     #loyaltyLevel;

//     constructor(name, breed) {
//         super(name, "Dog");
//         this.breed = breed;
//         this.#loyaltyLevel = 5;
//     }

//     makeSound() {
//         return `${this.name} barks.`;
//     }

//     wagTail() {
//         return `${this.name} is wagging its tail happily.`;
//     }

//     getInfo() {
//         return `${super.getInfo()}, Breed: ${this.breed}, Loyalty Level: ${this.#loyaltyLevel}`;
//     }
// }

// // Example Usage
// const animal1 = new Animal("Milo", "Cat");
// console.log(animal1.makeSound());
// console.log(animal1.eat("Milk"));
// console.log(animal1.sleep());
// console.log(animal1.getInfo());

// console.log("------------");

// const dog1 = new Dog("Bruno", "German Shepherd");
// console.log(dog1.makeSound());
// console.log(dog1.wagTail());
// console.log(dog1.getInfo());


// class person {
    
//     constructor(name,age,email){
// this.name =name,
// this.age =age,
// this.email = email
//     }

//     personalinfo () {
//     return `name is ${this.name} and age is ${this.age} `
//     }

//     introduse( ) {
//         return `My name is  ${this.name} i am ${this.age} year old`
//     }
// }

// class employee extends person {
//     #salary;
// constructor(name,age,email,id ,department){
//     super(name ,age,email)
// this.id = id,
// this.department =department,
// this.#salary =0
// }

// setsalry(salaryamount){
// this.#salary =salaryamount
// }

// getsalary(){
//     return `your salary is ${this.#salary} rupees`
// }

// work (){
//     return `${this.name} work in the ${this.department} department`
// }

// getemployerid(){
//     return `${super.personalinfo()} ,and i am work in ${this.department} department`
// }



// }


// class Mansger extends employee{
//     #manageremployee;
//     constructor(name,age,email,id ,department,teamsize){

//         super(name,age,email,id ,department)
//         this.teamsize = teamsize;
//         this.#manageremployee = [];
//     }
//     addemployee(employee){
// if(employee instanceof employee){
//     this.#manageremployee.push(employee)
//     return `${employee.name} addd to team`
// }
//     }

//     getemployee(){
//         return `${}`
//     }
    
// }




// const e1 = new employer("Arjun" , 18 , "arjun@e.com" ,"E01" , "IT");

// console.log(e1.personalinfo())
// console.log(e1.introduse())
// console.log(e1.setsalry(10000))
// console.log(e1.getsalary())
// console.log(e1.work())
// console.log(e1.getemployerid())


class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    personalinfo() {
        return `Name is ${this.name} and age is ${this.age}`;
    }

    introduce() {
        return `My name is ${this.name} and I am ${this.age} years old`;
    }
}

class Employee extends Person {
    #salary;
    constructor(name, age, email, id, department) {
        super(name, age, email);
        this.id = id;
        this.department = department;
        this.#salary = 0;
    }

    setsalary(salaryamount) {
        this.#salary = salaryamount;
    }

    getsalary() {
        return `Your salary is ${this.#salary} rupees`;
    }

    work() {
        return `${this.name} works in the ${this.department} department`;
    }

    getemployeeid() {
        return `${super.personalinfo()}, and I work in ${this.department} department`;
    }
}

class Developer extends Employee {
    #projectsCompleted;

    constructor(name, age, email, id, department, programmingLanguage) {
        super(name, age, email, id, department);
        this.programmingLanguage = programmingLanguage;
        this.#projectsCompleted = 0;
    }

    code() {
        return `${this.name} is coding in ${this.programmingLanguage}`;
    }

    setProjects(count) {
        this.#projectsCompleted = count;
    }

    getProjects() {
        return `${this.name} has completed ${this.#projectsCompleted} project(s)`;
    }

    completeProject() {
        this.#projectsCompleted++;
        return `${this.name} completed a new project! Total projects: ${this.#projectsCompleted}`;
    }
}

const dev1 = new Developer("Arjun", 22, "arjun@gmail.com", 101, "IT", "JavaScript");

dev1.setsalary(50000);

console.log(dev1.personalinfo());
console.log(dev1.introduce());
console.log(dev1.getemployeeid());
console.log(dev1.work());
console.log(dev1.getsalary());
console.log(dev1.code());
console.log(dev1.getProjects());
console.log(dev1.completeProject());
console.log(dev1.completeProject());
console.log(dev1.getProjects());

