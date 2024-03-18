import React, { useState, useEffect } from 'react'
import style from '../Profile.module.css'
import { Link, useLocation } from "react-router-dom";



export default function ProfileNav() {
  function Tabs() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
      const path = location.pathname;
      const tabId = path.substring(path.lastIndexOf('/') + 1);

      setActiveTab(tabId);
    }, [location.pathname]);

    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };
  return (
    <div className='col-md-3'>
      <div className="card text-start shadow">
        <div className='mt-3 ms-3'>
          <h3>Navigation</h3>
        </div>
        <div className={`${style.listContainer} list-group`} id="list-tab" role="tablist">
          <Link className={`${activeTab === 'profile' ? style.active : ''} list-group-item list-group-item-action`} id="profile" data-toggle="list" to="/profile" role="tab" aria-controls="profile" onClick={() => handleTabClick('profile')}>Dashboard</Link>
          <Link className={`${activeTab === 'orderHistory' ? style.active : ''} list-group-item list-group-item-action`} id="orderHistory" data-toggle="list" to="#" role="tab" aria-controls="orderHistory" onClick={() => handleTabClick('orderHistory')}>Order History</Link>
          <Link className={`${activeTab === 'whishList' ? style.active : ''} list-group-item list-group-item-action`} id="whishList" data-toggle="list" to="#" role="tab" aria-controls="whishList" onClick={() => handleTabClick('whishList')}>Whish List</Link>
          <Link className={`${activeTab === 'basket' ? style.active : ''} list-group-item list-group-item-action`} id="basket" data-toggle="list" to="#" role="tab" aria-controls="basket" onClick={() => handleTabClick('basket')}>Basket</Link>
          <Link className={`${activeTab === 'ProfileEdit' ? style.active : ''} list-group-item list-group-item-action`} id="ProfileEdit" data-toggle="list" to="/ProfileEdit" role="tab" aria-controls="ProfileEdit" onClick={() => handleTabClick('ProfileEdit')}>Settings</Link>
          <Link className={`${activeTab === 'logOut' ? style.active : ''} list-group-item list-group-item-action`} id="logOut" data-toggle="list" to="#" role="tab" aria-controls="logOut" onClick={() => handleTabClick('logOut')}>Log-Out</Link>
        </div>
      </div>
    </div>
  )
}
return <Tabs />
}