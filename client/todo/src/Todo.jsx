import "./style.scss";
import Search from './assets/Search.svg'
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";

function Todo() {

    const[post,setPost] = useState({})

    async function getPost() {

        try {
            
            const res = await fetch('http://localhost:3000/posts')
            const data = await res.json()

            if(!res.ok) {
                let message = 'Ошибка'
                throw new Error(message)
            }

            setPost(data)
           
            
            
            
        } catch (error) {

            console.log("Error", error);
            
            
        }
    }
    
    useEffect(() => {
        getPost()
    },[])
    

  return (
    <div className="todo">
      <h1 className="todo__title">TODO LIST</h1>

      <div className="todo__head">
        <div className="todo__search">
          <input type="text" placeholder="Search note..." />
        </div>

        <select className="todo__filter">
          <option>ALL</option>
          <option>Complete</option>
          <option>Incomplete</option>
        </select>
      </div>

      {/* Здесь будут задачи */}
      <div className="todo__content">
        <TodoList post={post} />
      </div>
    </div>
  );
}

export default Todo;