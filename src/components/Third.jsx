import React from 'react'
import Fourth from './Fourth'
import { useProduct } from '../contexts/Products'


function Third() {
    const { addItems } = useProduct();

    const add = () => {
        addItems({ name: 'kiwi', email: 'kiwi@gmail.com' });
    }
    return (
        <div>
            <Fourth />
            <button onClick={add}>Add</button>
        </div>
    )
}

export default Third