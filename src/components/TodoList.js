import TodoItem from './TodoItem'

export default function TodoList({todoList,setTodoList}) {
	return (
		<div>
			{todoList.map((todoItem) => 
				( <TodoItem key = {todoItem.id} todoList = {todoList} todoItem ={todoItem} setTodoList = {setTodoList} /> ) 
			)}
		</div>
	)
}