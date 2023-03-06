type GreetProps = {
    name : string
    messageCount : number
    isLoggedIn : boolean
}
export const Greet = (props: GreetProps) => {
    return (
        <h2>
            {
                props.isLoggedIn ? `Hi ${props.name} You have unread ${ props.messageCount} msg` : `Welcome gest`
            }
        </h2>
    )
}