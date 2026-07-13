import "./style.scss";
import Search from './assets/Search.svg'
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchPosts,selectFilteredPosts, setFilter } from "./store/todoSlice";
// import { data } from "react-router-dom";

function Todo() {
    
    const dispatch = useDispatch()
    const {status,error} = useSelector(state => state.posts)
    const filteredPost = useSelector(selectFilteredPosts)
    const filter = useSelector(state => state.posts.filter)


    // const handleStateList = () => {
    //   switch (selectedValue) {
    //     case 'complete':
    //       return posts.filter(post => post.completed === true)
    //       break;

    //     case 'incomplete':
    //       return posts.filter(post => post.completed === false )
      
    //     case 'all':

    //     default:
    //       return posts
    //       break;
    //   }
    // }
     
  
    useEffect(() => {
       dispatch(fetchPosts())
    },[dispatch])
    

 
    
    // const filteredPost = handleStateList()

    

  return (
    <div className="todo">
      <h1 className="todo__title">TODO LIST</h1>

      <div className="todo__head">
        <div className="todo__search">
          <input type="text" placeholder="Search note..." />
        </div>

        <select value={filter} onChange={(e) => dispatch(setFilter(e.target.value))} className="todo__filter">
          <option value='all'>ALL</option>
          <option value='complete'>Complete</option>
          <option value='incomplete'>Incomplete</option>
        </select>
      </div>

      

      {/* Здесь будут задачи */}
      <div className="todo__content">
        {status === 'loading' && <h2>Loading...</h2>}
        <TodoList  filteredPost = {filteredPost} />
      </div>
    </div>
  );
}

export default Todo;