import React from "react";
import styles from "../ProductArticle/ProductArticle.module.css";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

// related product fetch data
function getRelatedProduct(product) {
    let data = {
        id: product.id,
        category_id: product.category_id,
    };

    return axios.post(`http://127.0.0.1:8000/api/RelatedProducts/`, data);
}

export const RelatedProducts = ({ data }) => {
    let { data: CategoryData, isLoading } = useQuery("getRelatedProduct", () =>
        getRelatedProduct(data?.data.products)
    );
    // console.log(CategoryData?.data.products);
    return (
        <div className="row mt-4 mb-5">
            <div className="text-center">
                <p className="h2">Related Products</p>
            </div>
            {isLoading ? (
                <div className="d-flex justify-content-center mt-2">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                CategoryData?.data.products.map((CategoryItem, index) => (
                    <div key={index} className="col">
                        <Link to={`/products/${CategoryItem.id}`}>
                            <div className={`${styles.customcard} card h-100`}>
                                <img
                                    src={CategoryItem.image}
                                    className="card-img-top"
                                    alt="..."
                                    width={30}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{CategoryItem.title}</h5>
                                    <p className="card-text">
                                        {CategoryItem.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))

            )}
        </div>
    );
};
