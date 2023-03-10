import { Link } from "react-router-dom";
import React, { useEffect  } from "react";
import { getBlogs } from "../api/blog";
import { useAppDispatch , useAppSelector} from "../stores/store";
import '../style/blog.css'

export const Home = () =>{
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);

    const blogs = useAppSelector((state) => state.blog.blogs);

    return (
        <div className="Blog_Container">
            <ul>
                { blogs.map(item=> {
                    return(
                        <li>
                            <span>{ item.id}. </span>
                            <Link to={`/blogdetail/${item.id}`}> {item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}