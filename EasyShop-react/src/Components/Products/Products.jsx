import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Style from "./Products.module.css";
export function getProducts() {
    return axios.get(`http://127.0.0.1:8000/api/products`);
}

function getShopProductsByCategory(shopCategory, shopId, productcategory) {
    return axios.get(
        `http://127.0.0.1:8000/api/shops/` +
            shopCategory +
            `/${shopId}/products/${productcategory}`
    );
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
    const { category, id, productcategory } = useParams();
    const { isLoading, data } = useQuery("getShopProductsByCategory", () =>
        getShopProductsByCategory(category, id, productcategory)
    );
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
                                        className="card-img-top"
                                        style={{
                                            objectFit: "cover",
                                            height: "150px",
                                        }}
                                    />
                                    <div className="card-body">
                                        <span
                                            className={`text-main font font-sm fw-bolder card-text`}
                                        >
                                            {product.title}
                                        </span>
                                        <p className="font">
                                            {" "}
                                            {product.description}
                                        </p>
                                        <p
                                            className={`card-text position-absolute fw-bolder bottom-1 end-0 me-2 font text-black`}
                                        >
                                            L€ {product.price}
                                        </p>
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
