import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch , useAppSelector} from "../stores/store";
import { getBlogDetail } from "../api/blog";

export const BlogDetail = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getBlogDetail(id));
    }, [dispatch]);

    const blog : { id: number | undefined , body: string, title: string,  userId : number | undefined} = useAppSelector((state) => state.blog.blog);

    return(
        <div>
            {
                blog ? `Hi ${blog.body}` : `Welcome gest`
            }
        </div>
    )
}
