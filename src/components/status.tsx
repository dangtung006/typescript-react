type statusProp = {
    status : 'loading' | 'success' | 'error'
}

export const Status = (props : statusProp)=> {
    let message = "";
    if(props.status === "loading") {
        message = "loading";
    }else if(props.status === "success"){
        message = "success"
    }else if(props.status === "error"){
        message = "error"
    }

    return(
        <div>
            <h2>status : {message}</h2>
        </div>
    )
}