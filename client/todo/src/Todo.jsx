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
    const [searchQuery, setSearchQuery] = useState('') // Что ввел пользователь
    const [searchResult, setSearchResult] = useState([]) // Результат поиска
    
  
    useEffect(() => {
       dispatch(fetchPosts())
    },[dispatch])
    

 
     const handleSearch = () => {
        if (!searchQuery.trim()) {
            setSearchResult([]) // Если ничего не ввели - показываем все
            return
        }

        const query = searchQuery.toLowerCase().trim()
        const result = filteredPost.filter(post => 
            post.title.toLowerCase().includes(query)
        )
        setSearchResult(result)
    }


    // Что показывать: результат поиска или все посты
    const postsToShow = searchResult.length > 0 || searchQuery.trim() === '' 
        ? (searchResult.length > 0 ? searchResult : filteredPost)
        : filteredPost

    

  return (
    <div className="todo">
      <h1 className="todo__title">TODO LIST</h1>

      <div className="todo__head">
        <div className="todo__search">
          <input value={searchQuery} type="text" placeholder="Search note..."  onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>

        <button className="todo__searching" onClick={handleSearch}>Search</button>

        <select value={filter} onChange={(e) => dispatch(setFilter(e.target.value))} className="todo__filter">
          <option value='all'>ALL</option>
          <option value='complete'>Complete</option>
          <option value='incomplete'>Incomplete</option>
        </select>
      </div>

      

      {/* Здесь будут задачи */}
      <div className="todo__content">
        {status === 'loading' && <h2>Loading...</h2>}
        <TodoList  filteredPost = {postsToShow} />
      </div>
    </div>
  );
}

export default Todo;