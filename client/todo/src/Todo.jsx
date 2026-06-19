import "./style.scss";
import Search from './assets/Search.svg'
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchPosts } from "./store/todoSlice";
// import { data } from "react-router-dom";

function Todo() {
    
    const dispatch = useDispatch()
    const {status,error} = useSelector(state => state.posts) 
   

  
    useEffect(() => {
       dispatch(fetchPosts())
    },[dispatch])
    

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
        {status === 'loading' && <h2>Loading...</h2>}
        <TodoList />
      </div>
    </div>
  );
}

export default Todo;