import { Link } from "react-router-dom";
import '../style/header.css';
const header = () => {
    const headerLists = [
        {
            "title" : "Home",
            "href" : "/",
        },
        {
            "title" : "Login",
            "href" : "/login",
        },
        {
            "title" : "Users",
            "href" : "/users",
        }
    ]

    return(
        <div className="Header_Container">
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
            <div>User</div>
        </div>
    )
}


export default header;