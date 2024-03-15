import React from 'react'
import { ProductHeader } from './Header/ProductHeader'
import { ProductArticle } from './ProductArticle/ProductArticle'
export const Product = () => {
  return (
    <>
      <div className="container">
        <ProductHeader/>
        <ProductArticle/>

      </div>
    </>
  )
}
