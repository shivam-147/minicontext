import React from 'react'
import { useProduct } from '../contexts/Products'


function Fourth() {

    const { name, email } = useProduct();

    return (
        <div>
            <h2>name : {name}</h2>
            <h2>email : {email}</h2>
        </div>
    )
}

export default Fourth