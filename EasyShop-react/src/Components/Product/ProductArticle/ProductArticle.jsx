import React, { useState } from 'react';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';
import styles from './ProductArticle.module.css';
import { RelatedProducts } from '../RelatedProducts/RelatedProducts';
export const ProductArticle = ({ data }) => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <>
            <ul className={styles.tabnav} role="tablist">
                <TabNavItem
                    tabNumber={1}
                    activeTab={activeTab}
                    onClick={handleTabClick}
                    // to="/tab1"
                    className={styles.navitem}
                >
                    Description
                </TabNavItem>
                <TabNavItem
                    tabNumber={2}
                    activeTab={activeTab}
                    onClick={handleTabClick}
                    // to="/tab2"
                    className={`${styles.navitem} `}
                >
                    Customer Feedbacks
                </TabNavItem>

            </ul>

            {/* Tabs content */}
            <div className="d-flex">

                <div className={`${styles.tabcontent} col-md-7`}>
                    <TabContent
                        tabNumber={1}
                        activeTab={activeTab}
                    >
                        {/* Tab 1 content */}
                        <div className="oldprice text-decoration-none col-md-12">
                            {data?.data.products.article ?
                                data?.data.products.article :
                                `Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit.
                            Cumque quibusdam modi ut asperiores atque nobis ex quod adipisci at nisi,
                            necessitatibus assumenda rem laudantium architecto nostrum provident fuga. Asperiores, sapiente.
                            Lorem ipsum dolor sit amet consectetur:isloading...`}


                        </div>

                    </TabContent>
                    <TabContent
                        tabNumber={2}
                        activeTab={activeTab}
                    >
                        {/* Tab 2 content */}
                    </TabContent>

                </div>
                <div className="col-md-5 ms-1 ">
                    {/* Video */}
                    <div className="ratio ratio-16x9">
                        <iframe width="560" height="315" src={data?.data.products.video?
                        data.data.products.video:`https://www.youtube.com/embed/RA1GUc-oRcw?si=1mLf40JEpi1atae4`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    {/* Organic */}
                    <div className={`${styles.organic} row mt-3 rounded-3 border`}>
                        <div className='col-6 d-flex pt-3'>
                            <div className='col-2 me-3 mt-3'>
                                <i class="fa-solid greenbook fa-2x fa-tags"></i>
                            </div>
                            <div className="col-10">
                                <p className='h6'>
                                    64% Discount
                                </p>
                                <p className='oldprice text-decoration-none'>
                                    Save Money With us
                                </p>
                            </div>
                        </div>
                        <div className='col-6 d-flex pt-3 '>
                            <div className='col-2 me-3 mt-3'>
                                <i class="fa-solid fa-2x greenbook fa-leaf"></i>
                            </div>
                            <div className="col-10">
                                <p className='h6'>
                                    100% organic
                                </p>
                                <p className='para'>
                                    kolo bl 7ob ❤
                                </p>
                            </div></div>
                    </div>
                </div>
            </div>
            <RelatedProducts data={data} />

        </>
    )
}
