import style from '../css/style.module.css'

export default function TodoItem({todoList, todoItem, setTodoList}) {

	const deleteTodo = () => {
		setTodoList(todoList.filter((item) => item.id !== todoItem.id))
	} 

	return (
		<div>
			<h3 className={style.todoItem}>{todoItem.name}</h3>
			<button className={style.todoItemDeleteButton} onClick = {deleteTodo}>Delete</button>
		</div>
	)
}