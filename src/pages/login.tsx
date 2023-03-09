import { useState } from "react";
import "../style/login.css"

export const LogIn = () => {

    return(
        <div>
            <form className="Form_login" onSubmit={(e)=> e.preventDefault}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" />
                </div>
                <button onClick={()=> console.log()}> Login</button>
            </form>

        </div>
    )
}