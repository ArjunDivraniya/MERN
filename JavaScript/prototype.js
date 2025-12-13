// let animal = {
//     eats :true ,
//     walk: function (){
//         console.log(
//             "Animal walks"
//         )
//     }
// }

// let rebit =Object.create(animal)
// animal.lazy = true

// console.log(rebit.lazy)

// // console.log(rebit.__proto__)

// // var array = [1,2,3,5]
// console.log(rebit.__proto__)

// let vehicle = {
//     hasWheels : true 
// }

// let bike = Object.create(vehicle)
// bike.type = "Mountain Bike";

// let electricBike = Object.create(bike)
// electricBike.hasBattery =true
// console.log(electricBike.__proto__)


// let userPrototype = {
//     login : function(){
//         console.log(`${this.name} is  log in`)
//     },
//     logout : function(){
//         console.log(`${this.name} is  log out`)
//     }
// }


// function creatUser(name ,role){

//     let user = Object.create(userPrototype);
//     user.name = name
//     user.role =role 
//     return user;
// }

// let admin =creatUser("Mahir" , "Admin")

// admin.login();
// admin.logout();
// console.log(admin.role)
// console.log(admin.name)

// console.log(admin)
// console.log("Q1 Answer")

// Q1 Create Two Object : animal and dog objects should inherit from animal and have its own bark () method the animal objects should have and EventTarget() method that the dog ibject  can also access

// let animal = {
//     eat : function (){
//         console.log("eat......")
//     }
// }

// let dog = Object.create(animal)
// dog.bark = function(){
//     console.log("Brak......")
// }
// dog.bark()
// dog.eat()



// // Q2 write a constructor finction laptop that takes brand and model as arguments Attach a showspace() metjod to laptop prototype to display the laptop brand and model 

// console.log("Q2 Answer")


// function laptop (brand ,Models){
//     this.brand =brand
//     this.Models =Models
// }

// laptop.prototype.showspace =function(){
//     console.log(`Brand: ${this.brand}, Model: ${this.Models}`);
// }

// let laptop1 = new laptop('HP', 'Spectre x360');
// let laptop2 = new laptop('Apple', 'MacBook Air');

// laptop1.showspace();
// laptop2.showspace();


// let ar =[1,2,3,4,5]

// function sum (ar){
// return ar.reduce((acc ,cur ) => acc + cur,0)
// }

// console.log(sum(ar))

Array.prototype.sum =function (){
    console.log(this.reduce((acc ,cur ) => acc + cur,0))
}

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [10, 20, 30];

numbers1.sum();
numbers2.sum();


Array.prototype.sqsum =function (){

  let squre =  this.map(v => v*v)
  console.log(squre.reduce((acc ,cur) => acc + cur ,0))
}

numbers1.sqsum();
numbers2.sqsum();