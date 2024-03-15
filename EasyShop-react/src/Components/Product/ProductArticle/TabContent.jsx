import React from "react";
import styles from '../ProductArticle/ProductArticle.module.css';
function TabContent({ tabNumber, activeTab, children }) {
    return (
      <div
        className={`${styles.tabPane} fade ${tabNumber === activeTab ? 'show active' : ''}`}
        id={`ex1-tabs-${tabNumber}`}
        role="tabpanel"
        aria-labelledby={`ex1-tab-${tabNumber}`}
      >
        {children}
      </div>
    );
  }
  export default TabContent