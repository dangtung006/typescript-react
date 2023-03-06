type ListProps<T> = {
    items: T[]
    onClick: (value : T) => void
}

export const List = <T extends { id : number, first: string, last : string}>( { items, onClick}: ListProps<T>) => {
    return(
        <div>
            {/* <h2>List of items</h2> */}
            {
                items.map((item: T, idx)=>{
                    return(
                        <div key={idx} onClick={()=> onClick(item)}> {item.first} </div>
                    )
                })
            }
        </div>
    )
}