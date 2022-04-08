import React from 'react';
import { ApiTopPropduct } from '../apifolder/TopProductsApi';
import Product from './Product';

function Products() {
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {
          ApiTopPropduct.map((product,index)=>{
            return <Product item={product} key={index} />
          })
      }
    </div>
  )
}

export default Products
