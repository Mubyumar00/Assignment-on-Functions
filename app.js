// 01 //
function numsDouble(numbers) {
    return numbers.map((numb) => {
        return numb * 2;
        
    });
}
 
const numbArray = [1, 2, 3];
const doubleArray = numsDouble(numbArray);

console.log(numbArray);
console.log(doubleArray);

// Explanation:
// Map method basically takes each of the numbers from 1 to 3 in the array and apply 'numb * 2'. since my operation is done inside function numsDouble, the numbArray numbers are not changed.
// Map method helps to perform the calculation nums * 2 to all elements in the array and result will be created and displayed in a new array.

// 02 // 
username = {name: "Muby"}
console.log(username);

sessionStorage.setItem("myName", JSON.stringify({name: "User1"}));

const getUser = JSON.parse(sessionStorage.getItem("myName"));
console.log(getUser.name);


//
function storeName(name) {
    localStorage.setItem("myObject", name)
    const myName = localStorage.getItem("myObject")
    console.log("My name is", myName);
}

storeName("Mubarak");

// Explanation:
// web api helps store my data as key valued pairs locally so when you retreive it it will check for the adress data and return the key and value saved.


// 03 //
class Car {
    constructor(maker, model, color, year) {
      this.maker = maker;
      this.model = model;
      this.color = color;
      this.year = year;
    }
  
    describe() {
      return `This ${this.maker} ${this.model} (${this.year}) was purchased in ${this.color}`;
    }
  }
  
  const myNewCar = new Car("Toyota", "Corolla", "Red", 2013);
  
  // Create more car objects
  const car1 = new Car("Toyota", "Camry", "Black", 2008);
  const car2 = new Car("Toyota", "Lexus", "Grey", 2018);
  const car3 = new Car("Ford", "Edge", "Silver", 2010);
  const car4 = new Car("Kia", "Picanto", "Blue", 2016);
  
  // Call the describe() method on each car object and log the result
  console.log(car1.describe());
  console.log(car2.describe());
  console.log(car3.describe());
  console.log(car4.describe());


  // 04 //

  function salaries(employees) {
    return employees.map(employee => ({
      ...employee,
      salary: employee.salary * 1.1
    }));
  }
  
  const employees = [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 85000 },
    { name: "Charlie", salary: 90000 },
    { name: "David", salary: 100000 },
    { name: "Eve", salary: 60000 }
  ];
  
  const increasedSalaryEmployees = salaries(employees);
  
  console.log(increasedSalaryEmployees);

  // 05 //

  function customerOrderr(customers) {
    customers.forEach(customer => {
      console.log(`Customer: ${customer.name}`);
      console.log(`Items: ${customer.orders.join(', ')}`);
      console.log();
    });
  }
  
  const customers = [
    { name: "John", orders: ["Laptop", "Mouse", "Keyboard"] },
    { name: "Sarah", orders: ["Monitor", "Headphones"] },
    { name: "Michael", orders: ["Phone", "Charger", "Case"] },
    { name: "Anna", orders: ["Tablet"] }
  ];
  
  customerOrderr(customers);

  // 06 //

  function addFields() {
  const numInputs = document.getElementById("numInputs").value;
  const inputContainer = document.getElementById("inputContainer");

  inputContainer.innerHTML = ""; 

  for (let i = 0; i < numInputs; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Input ${i + 1}`;
    inputContainer.appendChild(input);
  }
}

function createTableRow() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const emailInput = document.getElementById("email");

  const tableBody = document.getElementById("tableBody");

  const newRow = document.createElement("tr");
  const name = document.createElement("td");
  const age = document.createElement("td");
  const email = document.createElement("td");

  nameCell.textContent = nameInput.value;
  ageCell.textContent = ageInput.value;
  emailCell.textContent = emailInput.value;

  newRow.appendChild(name);
  newRow.appendChild(age);
  newRow.appendChild(email);

  tableBody.appendChild(newRow);
}

function generateQuotes() {
  const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens to you while you're busy making other plans.",
    "Be yourself; everyone else is already taken.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "You only live once, but if you do it right, once is enough."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById("quote").textContent = randomQuote;
}