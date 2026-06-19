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

export const addToPosts = createAsyncThunk(
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
                descr:descr
            })
        })

        if(!res.ok){
            throw new Error('Can / t add the new posts' )
        }

        const data = res.json()

        dispatch(addPost(data))
            
        } catch (error) {

            rejectWithValue(error.message)
            
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
    reducers: {
        addPost(state,action){
            state.posts.push(action.payload)

        }
    },
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
        .addCase(addToPosts.rejected,(state,action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
    }

})

const addPost = todoSlice.actions

export default todoSlice.reducer