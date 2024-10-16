import React from 'react'
import { useProduct } from '../contexts/Products'


function Fourth() {

    const { items } = useProduct();

    return (
        <div>
            {
                items.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.email}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default Fourth