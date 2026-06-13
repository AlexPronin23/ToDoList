import Empty from './assets/Empty.png'
const TodoList = ({post}) => {
    return ( <>
    <h1 className="todo__content__title">Ваши задачи:</h1>

    {post.length > 0 ? (
        <ul className="todo_list">
           {post.map(({title,descr}) => (
            <li className="todo_items">
                <p className="todo_title">{title}</p>
                <p className="todo_descr">{descr}</p>
            </li>
           ))}
        </ul>
    ) : (
       <div className="todo_empty">
            <img src={Empty} alt="Empty" />
       </div>
    )}
     

    </> );
}
 
export default TodoList;