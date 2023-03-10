import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBlogDetail, getBlogs, createBlog, updateBlog } from "../../api/blog";

export interface Blog {
    id : number | undefined,
    title : string,
    body : string
    userId : number | undefined,
}

export interface BlogState {
    blogs: Blog[],
    blog : Blog
}

const initialState : BlogState = {
    blogs : [],
    blog  : { id : undefined, title: "", body : "", userId: undefined}
}

export const blogSlice = createSlice({
    name : "blogs",
    initialState,
    reducers : {},

    extraReducers : (builder) => {
        // get post
        builder
            .addCase(getBlogs.fulfilled, (state, { payload } : PayloadAction<any>)=>{
                state.blogs = payload
            })
            .addCase(getBlogs.pending, (state, action)=>{

            })
            .addCase(getBlogs.rejected, (state, action)=>{

            })
            //creat post
            .addCase(getBlogDetail.fulfilled, (state, { payload } : PayloadAction<any>)=>{
                state.blog = payload;
            });
    }   
})