type headingProps = {
    children : string
}

export const Heading = (props : headingProps)=> {
   return(
       <h2>Place Holder : {props.children}</h2>
   )
}   