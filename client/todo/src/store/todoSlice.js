import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function (_, {rejectWithValue}) {

        try {

        const res = await fetch('http://localhost:3000/posts')

        if(!res.ok) {
            throw new Error('Server error')
        }

        const data = await res.json()

        return data
            
        } catch (error) {

            return rejectWithValue(error.message);
            
        }

       
        
    }
)

export const addToPost = createAsyncThunk(
    'posts/addToPosts',
    async function ({title,descr}, {rejectWithValue,dispatch}) {


        try {

            const res = await fetch ('http://localhost:3000/posts', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title:title,
                descr:descr,
                completed:false
            })
        })

        if(!res.ok){
            throw new Error('Can / t add the new posts' )
        }

        const data = await res.json()

        return data
            
        } catch (error) {

            rejectWithValue(error.message)
            
        }

        
    }
)

export const deletePosts = createAsyncThunk(
    'posts/deletePost',
    async function (id,{rejectWithValue,dispatch}) {

    try {

        const res = await fetch(`http://localhost:3000/posts/${id}`,{
            method:'DELETE',
        }
        )

        if(!res.ok){
            throw new Error('Can/t delete post')
        }

       return id

          
    } catch (error) {
        return rejectWithValue(error.message)
            
    }
    
    }
)

export const toggleCompleted = createAsyncThunk (
    'posts/toggleCompleted',
    async function (id,{rejectWithValue,getState}) {

         const state = getState() 
        // Находим пост в текущем стейте Redux
        const post = state.posts.posts.find(p => p.id === id)
        try {

            const res = await fetch(`http://localhost:3000/posts/${id}`, {
                method:'PATCH',
                headers: {
                    'Content-type' : 'application/json'
                },
                body:JSON.stringify({
                    completed: !post.completed
                })
            })

            if(!res.ok){
                throw new Error('Can/t toggle completed')
            }

            const data = await res.json()

            return data
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
        
    }
)

export const editPosts = createAsyncThunk(
    'posts/editPosts',
    async function ({id,title,descr}, {rejectWithValue,getState}) {

        const state = getState()
        const post = state.posts.posts.find(p => p.id === id)

        try {

            const res = await fetch(`http://localhost:3000/posts/${id}`, {
                method:'PATCH',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    title:title,
                    descr:descr
                })
            })

            if(!res.ok) {
                throw new Error('Can/t edit your post')
            }

            const data = await res.json()

            return data
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
        
    }
)

const todoSlice = createSlice({
    name:'posts',
    initialState: {
        posts:[],
        status: null,
        error: null,
    },
    // reducers: {
    //     addPost(state,action){
    //         state.posts.push(action.payload)
    //     },
    //     deletePost(state,action){
    //         state.posts = state.posts.filter(post => post.id !== action.payload.id)
    //     }
    // },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending,(state) => {
            state.status = 'loading'
            state.error = null
        })
        .addCase(fetchPosts.fulfilled, (state,action) => {
            state.status = 'resolved'
            state.posts = action.payload
        })
        .addCase(fetchPosts.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(addToPost.fulfilled,(state,action) => {
            state.status = 'resolved'
            state.posts.push(action.payload)
        })
        .addCase(addToPost.rejected,(state,action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(deletePosts.fulfilled, (state,action) => {
            state.status = 'resolved'
            state.posts = state.posts.filter(post => post.id !== action.payload)
        })
        .addCase(deletePosts.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(toggleCompleted.fulfilled, (state, action) => {
            const post = state.posts.find(post => post.id === action.meta.arg)
            if (post) {
                post.completed = !post.completed
            }
})
        .addCase(toggleCompleted.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(editPosts.fulfilled, (state, action) => {
    const updatedPost = action.payload
    const index = state.posts.findIndex(p => p.id === updatedPost.id)
    if (index !== -1) {
        // Полностью заменяем пост данными с сервера
        state.posts[index] = updatedPost
    }
})
        .addCase(editPosts.rejected, (state,action) => {
            state.status = 'rejected'
            action.error = action.payload
        })
    }

})

const {addPost, deletePost} = todoSlice.actions

export default todoSlice.reducer