// import logo from './logo.svg';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from "react"

function App() {
  
  let [todo,setTodo] = useState("")
	let [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      <Header/>
      <TodoForm todo = {todo} setTodo ={setTodo} todoList = {todoList} setTodoList ={setTodoList}/>
      <TodoList  todoList = {todoList} setTodoList = {setTodoList}/>
      
      
      {/* <Todo/> */}
      {/* <UserForm/>
      <hr></hr>
      <Parent nameOfFather = "Ben Parker"/>
      <hr></hr>
      <Child firstName = "Peter" lastName = "Parker" />
      <hr></hr>
      <Products/> */}
      

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
