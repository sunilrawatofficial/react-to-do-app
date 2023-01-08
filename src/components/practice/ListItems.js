import style from '../../css/style.module.css'

export default function ListItems(props) {

    // const laptopsBrands = ["Apple","Dell", "Acer", "lenovo"]

    // const list = laptopsBrands.map((brand, index) => <h5 key={index}>{brand}</h5>)
    return (
        <div>
            <h3 className = {style.todoItem}>{props.name}</h3>
            <button className = {style.todoItemDeleteButton}>Delete</button>
            {/* {list} */}
        </div>
    )
}