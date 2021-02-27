import React from 'react'
import './css/product.css'

export default function Products(props) {
    return (
        <div class="design">
            <p>Name of product is {props.name}</p>
            <p>Description :</p> 
            <p>{props.desc}</p>
            <p>price of product is {props.price}</p>
            <p>{props.category}</p>
            
        </div>
    )
}
