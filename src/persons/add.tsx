import React, { useRef } from "react";
import { addPerson } from "../stores/features/personSlice";
import { useAppDispatch } from "../stores/store";

export const Add = () => {
    const name = useRef<string>("");
    const dispatch = useAppDispatch();

    return(
        <form className="" onSubmit={(e) =>  e.preventDefault()} >
            <label htmlFor="">Person Name: </label>

            <input 
                type="text" 
                className=""
                onChange={(e) => (name.current = e.target.value)}
            />

            <button 
                onClick={()=> dispatch(addPerson({ name : name.current}))}
            >
                add
            </button>

        </form>
    )
}
