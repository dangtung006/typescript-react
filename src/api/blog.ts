import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface blogDetailResponse {
    id : number,
    title : string,
    body : string
    userId : number,
}

interface blogsResponse {
    data : blogDetailResponse[]
}

export const getBlogs = createAsyncThunk(
    "blog/get",
    async (apiThunk)=> {
        const { data, status } = await axios.get<blogsResponse>("https://jsonplaceholder.typicode.com/posts?_limit=10", {
            headers : {
                Accept: 'application/json',
            },
        })
        return data;
    }
);

export const getBlogDetail = createAsyncThunk(
    "blog/id",
    async (id : any , apiThunk) =>{
        const { data, status } = await axios.get<blogDetailResponse>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            headers : {
                Accept: 'application/json',
            },
        })
        console.log("data : ", data);
        return data;
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

