import React from 'react';
import { Link } from 'react-router-dom';
import style from './ProductArticle.module.css'
function TabNavItem({ tabNumber, activeTab, onClick, to, children }) {
  return (
    <li className={style.navitem} role="presentation">
      <Link
        className={`articlenavlink ${tabNumber === activeTab ? 'active' : ''}`}
        id={`ex1-tab-${tabNumber}`}
        to={to}
        role="tab"
        aria-controls={`ex1-tabs-${tabNumber}`}
        aria-selected={tabNumber === activeTab ? 'true' : 'false'}
        onClick={() => onClick(tabNumber)}
      >
        {children}
      </Link>
    </li>
  );
}

export default TabNavItem;
