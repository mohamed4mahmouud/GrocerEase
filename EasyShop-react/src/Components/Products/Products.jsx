import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Style from "./Products.module.css";
export function getProducts() {
    return axios.get(`http://127.0.0.1:8000/api/products`);
}

function getShopProductsByCategory(shopCategory, shopId, productcategory){
  return axios.get(`http://127.0.0.1:8000/api/shops/`+shopCategory+`/${shopId}/products/${productcategory}`)
}
export async function addToCart(product) {
    let data = {
        product_id: product.id,
    };
    console.log(data);
    let res = await axios.post(`http://127.0.0.1:8000/api/add-to-cart`, data);
}

export const Products = () => {
    // console.log(data?.data);
    const {category, id, productcategory}= useParams();
    console.log(category, id, productcategory);
    const { isLoading, data } = useQuery("getShopProductsByCategory",()=> getShopProductsByCategory(category, id, productcategory));
  console.log(data?.data);
    return (
        <>
            {isLoading ? (
                <div className="d-flex justify-content-center mt-2">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="container py-2">
                    <div className="row row-cols-5 g-3">
                        {data?.data.products.map((product) => (
                            <div key={product.id} className="col-md-2">
                                <Link
                                    className={`cursor-pointer py-3 px-2 card ${Style.card} h-100 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-0-hover`}
                                    to={`/products/${product.id}`}
                                >
                                    <img
                                        src={product.image}
                                        alt=".."
                                        className="w-60 card-img-top"
                                    />
                                    <div className="card-body">
                                        <span
                                            className={`text-main font-sm fw-bolder card-text`}
                                        >
                                            {product.title}
                                        </span>
                                        <p
                                            className={`card-text ${Style.text}`}
                                        >
                                            ${product.price}
                                        </p>
                                        <i
                                            className={`fa-solid fa-star ${Style.ratingstar}`}
                                        ></i>
                                        <i
                                            className={`fa-solid fa-star ${Style.ratingstar}`}
                                        ></i>
                                        <i
                                            className={`fa-solid fa-star ${Style.ratingstar}`}
                                        ></i>
                                        <i
                                            className={`fa-solid fa-star ${Style.ratingstar}`}
                                        ></i>
                                        <i
                                            className={`fa-solid fa-star ${Style.ratingstar}`}
                                        ></i>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-handbag position-absolute bottom-0 end-0 m-2 "
                                            viewBox="0 0 16 16"
                                            onClick={() => addToCart(product)}
                                        >
                                            <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
