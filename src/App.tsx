import React from 'react';
import './App.css';
// import { Greet } from "./components/greet";
// import { People } from "./components/people";
// import { Status } from "./components/status";
// import { Heading } from "./components/heading";
// import { Oscar } from "./components/osca";
// import { Button } from "./components/button";
// import { Input } from "./components/input";
// import { Container } from "./components/container";

// import { LoggedIn } from "./pages/login";
// import { User } from "./pages/user";
// import { Private } from "./pages/auth/private";
// import { Profile } from './pages/auth/profile';
// import { List } from './pages/list';

import { Add } from "./persons/add";
import List from "./persons/list";

function App() {
    // const people = [
    //     {
    //         first : "tony",
    //         last : "Doan"
    //     },
    //     {
    //         first : "Henry",
    //         last : "Nguyen"
    //     }
    // ];

    return (
        <div className="App">
            {/* <Greet name="aaaa" messageCount={20} isLoggedIn={false} />
            <People names={people}/>
            <Status status="error"/>
            <Oscar>
                <Heading children='vbvbvbvbbv'/>
            </Oscar>
            <Button 
                handleClick={(event, id)=>{
                    console.log('Button clicked', event, id);
                }}
            />

            <Input value="aaaa" handleChange={(event)=> console.log(event)} />
            <Container styles={ { border: "1px solid black", padding : "1rem"} } /> */}

            {/* <LoggedIn />

            <User /> */}


            {/* <Private  isLoggedIn={false} Component={Profile}/>

            <List 
                items={
                    [
                        {
                            id : 0,
                            first : "tung",
                            last : "dang"
                        }
                    ]
                }
                onClick={(item)=> console.log(item)}
            /> */}

            <Add />
            <List />
        </div>
    );
}

export default App;
