import { useState } from "react"
import ListItems from "./ListItems"
export default function Todo() {

	let [todo,setTodo] = useState("")
	let [todoList, setTodoList] = useState([])

	const submitForm = (event) =>{
		event.preventDefault();
		if(todo) {
			todoList.push(todo)
			setTodoList(todoList)
		}
		setTodo("")
	}

	return (
		<div>
			<h4>To-do List</h4>
			<form onSubmit={submitForm}>
				<input type="text" placeholder="Todo Name" value={todo} onChange = {(event) => { setTodo(event.target.value) }}/> 
				<button type="submit">Add</button>
			</form>
			{todoList.map((item, index) => 
				( <ListItems key={index} name= {item}/> ) 
			)}
		</div>
	)
}