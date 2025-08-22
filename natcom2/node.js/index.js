console.log("Hello, sandy!");
// for(initialization; condition; incrementation) {
// loop body



//   let counter ;
//   let sum=0
//   for(counter=0;counter<=10;counter=counter+2){
// //    if(counter===5){
// //     continue;
// //    }
//    console.log(counter)

//    sum=sum+counter;
//   }
// console.log(sum)



// while(condition)
// statements (cond,console,)

let i = 0;
while (i <= 30) {
    console.log(i);
    i = i + 3;
}


let j = 0
do {
    console.log(j);
    j += 5
} while (j <= 50);

// nested loops
let rows = 1
let cols

for (rows = 1; rows <= 5; rows++) {
    let pattern = ""
    for (cols = 1; cols <= rows; cols++) {
        pattern += "*";
    }
    console.log(pattern);
}


//Object orianted programming
// 
// class[members,attributs & behaviors,functions]
// , object[defines all those attribute and finctions ]
// , constructor[]
// , inheritance[passing properties among 2 or  more  classes ]
// , encapsulation,[bulding  our data and menber functions]
//  polymorphism[represente function from 1 form to other forms]
// ,execption handling [handle errors in programming]
// , abstraction[hide importante details and display ui needed to user data from outside world]



//  ClassX OBJECT


class student {
    constructor(stud_id, stud_name, stud_age, stud_gender) {
        this.stud_id = stud_id
        this.stud_name = stud_name
        this.stud_age = stud_age
        this.stud_gender = stud_gender
    }
    greet() {
        console.log(`student id is ${this.stud_id}`)
        console.log(`student id is ${this.stud_name}`)
        console.log(`student age is ${this.stud_age}`)
        console.log(`student gender is ${this.stud_gender}`)
    }
}

const obj1 = new student(1, 'John Doe', 34, 'male');
obj1.greet()
const obj2 = new student(2, 'sarah', 24, 'female');
obj2.greet()

class car {
    constructor(car_name, car_model, car_color, car_price) {
        this.car_name = car_name
        this.car_model = car_model
        this.car_color = car_color
        this.car_price = car_price
    }

    details() {
        console.log(`car id is ${this.car_name}`)
        console.log(`car id is ${this.car_model}`)
        console.log(`car age is ${this.car_color}`)
        console.log(`car gender is ${this.car_price}`)
    }
}

const car1 = new car(1, 'bmw', '2020', 'black', 5000000)
car1.details()
const car2 = new car(2, 'audi', '2021', 'white', 6000000)
car2.details()

// encapsulation

class BankAccount {
    balance = 0.0
    deposit(amount) {
        this.balance += amount
        console.log(`Deposited: ${amount}`)
    }
    getBalance() {
        return `the balance is ${this.balance}`
    }
    withdraw(amount) {
        this.balance -= amount
        console.log(`withdrawn: ${amount}`)
    }
}

const account = new BankAccount()
// account.deposit(1000)
// account.deposit(500)
// console.log(account.getBalance())


// inheritance

class animal{
    constructor(name){
        this.name=name
    }
    displayName(){
        console.log(`animal name is ${this.name}`)  
    }
}

const obj= new animal('lion')
obj.displayName()


// class dog

class Dog extends animal{
    makesound() {
        console.log("woof woof")
    }
}
const newdog= new Dog('Dog')
newdog.displayName()
newdog.makesound()



 class Model{


    constructor(model){
        this.model=model
    }
    displayModel(){
        console.log(`car model is ${this.model}`)  
    }
 }



class Car extends Model{
  constructor(model,brand){
    super(model,brand);
    this.brand=brand
  }
   displaycar() {
       console.log(`car model is ${this.model}`)
       console.log(`car brand is ${this.brand}`)
    }
}

const newitem= new Car('2020','G.M.C')
// newitem.displaycar()




// container in Js
// array//objects//array of objects//json

const names=['sandy','john','doe','smith']
console.log(names[0])
// fuynction used in array

for(let counter=0;counter<=names.length;counter++){
    // console,log(names[counter])
}
// const result = names.map((name)=>name.id === id)
// console.log(result)


// objects [key,values ]


const person={
    id:1,
    name:'sandy',
    age:24,
    gender:'M',
    hassPassed: true,
    mark:88.90
}
console.log(person.mark)