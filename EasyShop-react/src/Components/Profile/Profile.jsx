import React, { Fragment, useState } from 'react'
import style from './Profile.module.css'
import { Link } from "react-router-dom";
import ProfileNav from './ProfileNav/ProfileNav';

export default function Profile() {
  return (
    <Fragment>
      <div className="container text-center mt-5">
        <div className="row">
          <ProfileNav />
          <div className='col-md-9 '>
            <div className="row">
              <div className="col-md-6">
                <div className={`${style.cardHeight} card d-flex align-items-center shadow flex-column`}>
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle mt-4" width={150} alt="Avatar" />
                <p className='h3'>John Doe</p>
                <p className='h5 text-muted'>Customer</p>
                <Link className={`${style.orange} text-decoration-none h6`}>Edit Profile</Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${style.cardHeight} card shadow text-start d-flex flex-column`}>
                  <div className="ms-4">
                    <p className="h6 mt-4 mb-2">BILLING ADDRESS</p>
                    <p className="mt-3 h3 mb-2">John Doe</p>
                    <p className="mt-3 h6 nb-2">3 shar3 ezayek ya wa7shni</p>
                    <p className="mt-3 h6 mb-2">7ambozo@gmail.com</p>
                    <p className="mt-3 h6 mb-4">(+20)12345678</p>
                    <Link className={`${style.orange} text-decoration-none h6`}>Edit Address</Link>
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
                    <Link className={`${style.orange} m-0 text-decoration-none h6`}>View All</Link>
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
            <div className="card-body d-flex">
              <table className='col-md-12'>
                <tbody>
                  <tr>
                    <td className=' col-md-2 text-start ps-3'><p>#123</p></td>
                    <td className=' col-md-3'><p>8 Sep,2020</p></td>
                    <td className=' col-md-3'><p>$135.00(5 Products)</p></td>
                    <td className=' col-md-2'><p>on the way</p></td>
                    <td className=' col-md-2 text-end h6 pb-3'><Link className={`${style.orange} text-decoration-none `}>View Details</Link></td>
                  </tr>
                  <tr>
                    <td className=' col-md-2 text-start ps-3'><p>#123</p></td>
                    <td className=' col-md-3'><p>8 Sep,2020</p></td>
                    <td className=' col-md-3'><p>$135.00(5 Products)</p></td>
                    <td className=' col-md-2'><p>on the way</p></td>
                    <td className=' col-md-2 text-end h6 pb-3'><Link className={`${style.orange} text-decoration-none `}>View Details</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

