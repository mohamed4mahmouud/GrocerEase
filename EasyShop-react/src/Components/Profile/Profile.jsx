import React, { Fragment } from 'react'
import style from './Profile.module.css'
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <Fragment>
      <div className="container text-center mt-5">
        <div className="row">
          <div className='col-md-3'>
            <div className="card text-start shadow">
              <div className='mt-3 ms-3'>
                <h3>Navigation</h3>
              </div>
              
              <div className={`${style.listContainer} list-group`} id="list-tab" role="tablist">
                <a className={`${style.active} list-group-item list-group-item-action`} id="dashboard" data-toggle="list" href="#list-home" role="tab" aria-controls="dashboard">Dashboard</a>
                <a className="list-group-item list-group-item-action" id="orderHistory" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Order History</a>
                <a className="list-group-item list-group-item-action" id="whishList" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Whish List</a>
                <a className="list-group-item list-group-item-action" id="basket" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Basket</a>
                <a className="list-group-item list-group-item-action" id="settings" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                <a className="list-group-item list-group-item-action" id="logOut" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Log-Out</a>
              </div>
            </div>
          </div>
          <div className='col-md-9 '>
            <div className="row">
              <div className="col-md-6">
                <div className="card d-flex align-items-center shadow">
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle mt-4" width={150} alt="Avatar" />
                <p className='h3'>John Doe</p>
                <p className='h5 text-muted'>Customer</p>
                <Link className={`${style.orange} text-decoration-none`}>Edit Profile</Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card shadow text-start ">
                  <div className="ms-4">
                    <p className="h6 mt-3 ">BILLING ADDRESS</p>
                    <p className="mt-3 h3">John Doe</p>
                    <p className="mt-3 h6">3 shar3 ezayek ya wa7shni</p>
                    <p className="mt-3 h6">7ambozo@gmail.com</p>
                    <p className="mt-3 h6">(+20)12345678</p>
                    <Link className={`${style.orange} text-decoration-none`}>Edit Address</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-4 shadow">
              <div className={`${style.cardHeader} card-header d-flex justify-content-between align-items-center`}>
                <div className="d-flex align-items-center">
                    <p className="h3 m-0">Recent Order History</p>
                </div>
                <div>
                    <p className={`${style.orange} m-0`}>View All</p>
                </div>
            </div>
            <div className="card-header">
              <div className="d-flex ">
                <p className='h6 col-md-2 text-start'>ORDER ID</p>
                <p className='h6 col-md-3'>DATE</p>
                <p className='h6 col-md-3'>TOTAL</p>
                <p className='h6 col-md-2'>STATUS</p>
                <p className='h6 col-md-2'></p>
              </div>
            </div>
            <div className="col-md-12 card-body d-flex">
              <p className=' col-md-2 text-start ps-3'>#123</p>
              <p className=' col-md-3'>8 Sep,2020</p>
              <p className=' col-md-3'>$135.00(5 Products)</p>
              <p className='col-md-2'>on the way</p>
              <p className={`${style.orange} col-md-2 text-end`}>View Details</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
