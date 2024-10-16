import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";


export default function Profile() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { setUser } = useContext(UserContext) // useContext hook is used where we really do the use of the context

    const handler = (e) => {
        e.preventDefault();
        console.log(username);
        setUser({ username, password });
    }

    const { secondFun } = () => {
        console.log('this is the second function')
    }
    return (
        <div>
            <input type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />

            <input type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onChange={handler}>Login</button>
        </div>
    )
}
