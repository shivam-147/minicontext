import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {

    const [user, setUser] = React.useState(null)
    const student = React.useState({
        firstName: 'shivam',
        lastName: 'bathre',
        age: 21,
        gender: 'male'
    });

    return (
        <UserContext.Provider value={{ user, setUser, student }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;