import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Blog {
    title : string, 
    description : string
}

interface BlogState {
    blogs: Blog[]
}

const initialState : BlogState = {
    blogs : []
}

export const blogSlice = createSlice({
    name : "blogs",
    initialState,
    reducers : {
        addBlogs : (state, action : PayloadAction<{ title : string, description : string}>) => {
            state.blogs.push({
                title : action.payload.title,
                description : action.payload.description,
            });
        }
    }
})