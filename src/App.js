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
const arr1 = [1,2,3,4,5,6]

for (let item of arr1){
  console.log(item);
}
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
