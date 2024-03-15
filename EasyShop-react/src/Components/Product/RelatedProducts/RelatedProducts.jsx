import React from 'react'
import styles from '../ProductArticle/ProductArticle.module.css';
export const RelatedProducts = () => {
    return (
        <div className="row mt-4">
            <div className="text-center">
                <p className="h2">Related Products</p>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className={`${styles.customcard} card h-100`}>
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.customcard} card h-100`}>
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a short card.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.customcard} card h-100`}>
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.customcard} card h-100`}>
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
