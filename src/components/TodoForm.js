import style from '../css/style.module.css'
import shortId from 'shortid'
export default function TodoForm({todo, setTodo, todoList, setTodoList }) {



	const submitForm = (event) =>{
		event.preventDefault();
		if(todo) {
			todoList.push({
				id: shortId.generate(),
				name: todo
			})
			setTodoList(todoList)
		}
		setTodo("")
	}

	return (
		<div className = {style.todoForm}>
			<form onSubmit={submitForm}>
				<input className= {style.todoInput} type="text" placeholder="Todo Name" value={todo} onChange = {(event) => { setTodo(event.target.value) }}/> 
				<button className= {style.todoButton}  type="submit">Add</button>
			</form>
		</div>
	)
}