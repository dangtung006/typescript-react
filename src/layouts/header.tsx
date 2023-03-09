import { Link } from "react-router-dom";
const header = () => {
    const headerLists = [
        {
            "title" : "Home",
            "href" : "/",
        },
        {
            "title" : "Login",
            "href" : "/login",
        }
    ]

    return(
        <ul>
            {
                headerLists.map(item=> {
                    return(
                        <li>
                            <Link to={item.href}> {item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}


export default header;