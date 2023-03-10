import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
    "blog/get",
    async (apiThunk)=> {
        try{
            const result = await axios.get("", {
                headers : {
                    Accept: 'application/json',
                },
            })
            return result;
        }catch(err){
            return "failed to load"
        }
    }
);

export const getBlogDetail = createAsyncThunk(
    "blog/id",
    async () =>{

    }
);

export const createBlog = createAsyncThunk(
    "blog/create",
    async (createBlog : any, apiThunk ) => {
        try{
            const { data, status } = await axios.post(
                '',
                createBlog,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            );

            return data;
        }catch(err) {
            return "Failed to create data"
        }
    }
);

export const updateBlog = createAsyncThunk(
    "blog/update",
    async (updateBlog : any, apiThunk )=>{

    }
)

