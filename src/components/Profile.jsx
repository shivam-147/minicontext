import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";


function Profile() {

    const { user } = useContext(UserContext)
    const { student } = useContext(UserContext)

    if (!user)
        return <div>Please Login</div>
    else
        return <div>Welcome {user.username} <p>{student.firstName} {student.lastName}</p> </div>

}

export default Profile