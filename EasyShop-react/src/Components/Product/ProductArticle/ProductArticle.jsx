import React, { useState } from 'react';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';
import styles from './ProductArticle.module.css';

export const ProductArticle = () => {

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
                    className={styles.navitem}
                >
                    Customer Feedbacks
                </TabNavItem>
                
            </ul>

            {/* Tabs content */}
            <div className={styles.tabContent}>
                <TabContent
                    tabNumber={1}
                    activeTab={activeTab}
                >
                    {/* Tab 1 content */}

                </TabContent>
                <TabContent
                    tabNumber={2}
                    activeTab={activeTab}
                >
                    {/* Tab 2 content */}
                </TabContent>
            </div>
        </>
    )
}
