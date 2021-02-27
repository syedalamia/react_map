import React,{useState} from 'react'
import Products from './Products'
import './css/product.css'

export default function MyComponent() {

    const [product, setProduct] = useState([
        {
            name: 'Samsung',
            description: 'Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression. In the example below, <div>0</div> will be returned by the render method.',
            price: '500',
            category: 'Mobile phone',
        },
        {
            name: 'Nokia',
            description: 'Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression. In the example below, <div>0</div> will be returned by the render method.',
            price: '100',
            category: 'handset',
        },
        {
            name: 'Motorola',
            description: 'Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression. In the example below, <div>0</div> will be returned by the render method.',
            price: '300',
            category: 'folding',
        },
      
        ])


    const [dataEntry, setDataEntry] = useState()



    const getClicked=(index)=>{
        
        setDataEntry(index)
    }
   
    return (
        <>
            {
                product.map((data,index)=>{
                    return (
                    <>
                    
                    <h2 >Product Name {index+1}</h2> 
                    <h2>{data.name}</h2>
                    <button  onClick={()=>{getClicked(index)}}>See Details</button>

                    
                    

                    </>
                    
                    
                    )

                    
                })

                
            }


                    {
                        dataEntry===0&&<Products  name={product[dataEntry].name} desc={product[dataEntry].description} price={product[dataEntry].price} category={product[dataEntry].category}/>
                    }

                    {
                        dataEntry===1&&<Products  name={product[dataEntry].name} desc={product[dataEntry].description} price={product[dataEntry].price} category={product[dataEntry].category}/>
                    }

                    {
                        dataEntry===2&&<Products  name={product[dataEntry].name} desc={product[dataEntry].description} price={product[dataEntry].price} category={product[dataEntry].category}/>
                    }



        </>
    )
}
