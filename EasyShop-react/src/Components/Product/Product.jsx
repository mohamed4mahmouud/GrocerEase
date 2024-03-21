import React from 'react'
import { ProductHeader } from './Header/ProductHeader'
import { ProductArticle } from './ProductArticle/ProductArticle'
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function getProductById(product_id) {
  return axios.get(`http://127.0.0.1:8000/api/products/${product_id}`);
}

export const Product = () => {
  const { product_id } = useParams();
  let { isLoading, data } = useQuery("getProductById", () =>
      getProductById(product_id)
  );

  return (
    <>
      <div className="container">
        <ProductHeader data={data} isLoading={isLoading}/>
        <ProductArticle data={data}/>

      </div>
    </>
  )
}
