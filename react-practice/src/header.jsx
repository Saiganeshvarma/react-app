import React from 'react'
import products from './products'
function Header(){
    return(
        <div>
            {
                products.map((item)=>{
                    return(
                        <div>
                            <h1>{item.price}</h1>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Header