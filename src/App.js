import logo from './logo.svg';
import './App.css';
function App(){
// let str = "hello"
// let str2 = "world"

// if (str === "hello" && str2 === "world")
//   {
//     console.log("hello world");
//   }
// const student1 = {
//   name:  "Nirbhay",
//   age: "5",
//   address:  "jamshedpur",
// };

// const student2 = {
//   name: "Nirbhay",
//   age: "5",
//   address: "Mumbai",
// }
// const fun1 =() => {
//   const num1 =1;
//   const num2 =2;
//   const sum = num1+ num2;
//   console.log(sum);
// };
// if(student1.name===student2.name){
//   fun1();
// }
// else{
//   console.log("hello")
// }
// const arr1 = [1,2,3,4,5,6]

// for (let item of arr1){
//   console.log(item);
// }
// const people =[
//   {name: "nirbhay" ,age:67},
//   {name: "kuswant" ,age:99},
// ]
// const employees = [
//   {name:"nirbhay",age:19,salary: 600},
//   {name:"raj",age:19,salary: 600},
//   {name:"ayush",age:19,salary: 600},
// ];
// const mappedEmployees = employees.map((item) => {
//   return {
//     ...item,
//     salary: item.salary + 100,
//   };
// }, []);
// console.log("employees", employees);
// console.log("mappedEmployees", mappedEmployees);
// for (let item of pepole) {
//   console.log(`name:${person.name}, age: ${person.age}`);
// }2
// people.forEach((person) => {
//   // console.log(`name:${person.name}, age: ${person.age}`);
// });
// const employee = {
//   name: "puja",
//   age: 89,
//   occupation: "hmmm....",
// };
// console.log(employee.name);
const products =[
  {id: 1001,name: "laptop", price: 1000, category: "Electronics"},
  {id: 1002,name: "shirt", price: 50, category: "clothing"},
  {id: 1003,name: "coffe maker", price: 808, category: "Home appliances"},
  {id: 1004,name: "Headphones", price: 1200, category: "Electronics"},
  {id: 1005,name: "pants", price: 600, category: "clothing"},
];
const filteredProducts = products.filter((item) =>{
  return item.category === "clothing";
});
console.log("filteredProduct", filteredProducts);

const foundProducts = products.filter((item) =>{
  return item.id === 1002;
});
console.log("foundProducts", foundProducts);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
