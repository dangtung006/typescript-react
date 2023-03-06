type peopleNameProps = {
    names : {
        first : string,
        last : string
    }[]
}
export const People = (props : peopleNameProps)=>{
    return (
        <div>
            {
                props.names.map(item=>{
                    return(
                        <h2>{item.first} {item.last}</h2>
                    )
                })
            }
        </div>
    )
}