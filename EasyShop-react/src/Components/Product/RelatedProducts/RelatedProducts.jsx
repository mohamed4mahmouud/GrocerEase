import React from "react";
import styles from "../ProductArticle/ProductArticle.module.css";
import axios from "axios";
import { useQuery } from "react-query";

// related product fetch data
function getRelatedProduct(product) {
    let data ={
        "id":product.id,
        "category_id":product.category_id
    }
// console.log(data);

    return axios.post(
        `http://127.0.0.1:8000/api/RelatedProducts/`,data);
}

export const RelatedProducts = ({data}) => {
    let { data: CategoryData } = useQuery("getRelatedProduct", () =>
        getRelatedProduct(data?.data.products)
    );
    console.log(CategoryData);
    return (
        <div className="row mt-4">
            <div className="text-center">
                <p className="h2">Related Products</p>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className={`${styles.customcard} card h-100`}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.customcard} card h-100`}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.customcard} card h-100`}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.customcard} card h-100`}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
