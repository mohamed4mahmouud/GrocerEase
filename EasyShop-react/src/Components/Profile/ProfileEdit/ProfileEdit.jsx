import React from 'react'
import style from '../Profile.module.css'
import ProfileNav from '../ProfileNav/ProfileNav';
import CityDropDown from './CityDropDown';


export default function ProfileEdit() {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className='col-md-3'>
                <ProfileNav />
            </div>
            <div className='col-md-9 '>
                <div>
                    <div className="card shadow">
                        <div className={`${style.cardHeader} card-header`}>
                            <p className="h3">Account Settings</p>
                        </div>
                        <div className="card-body d-flex">
                            <form className='col-md-7'>
                                <div className="form-group" >
                                    <label htmlFor="userName" className='mb-2'>Full Name</label>
                                    <input type="text" className={`${style.inpOrg} form-control mb-2`} id="userName" placeholder="userName" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="eMail" className='mb-2'>Email</label>
                                    <input type="email" className={`${style.inpOrg} form-control mb-2`} id="eMail" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" className='mb-2'>Phone Number</label>
                                    <input type="tel" className={`${style.inpOrg} form-control mb-4`} id="phone" placeholder="Phone" />
                                </div>
                                <button type="submit" className={`${style.savechange} btn rounded-pill`}>Save Changes</button>
                            </form>
                            <div className="col-md-5 text-center">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle mt-4 mb-3" width={'50%'} alt="Avatar" /><br />
                                <button className={`${style.choseImg} btn rounded-pill`}>Choose Image</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card shadow mt-5">
                    <div className={`${style.cardHeader} card-header`}>
                        <p className="h3">Billing Address</p>
                    </div>
                    <div className="card-body d-flex">
                        <form className='d-flex flex-wrap col-md-12 justify-content-between'>
                            <div className={`${style.newWidth} form-group`}>
                                <label htmlFor="FirstName" className='mb-2'>First Name</label>
                                <input type="text" className={`${style.inpOrg} form-control mb-2`} id="FirstName" placeholder="First Name" />
                            </div>
                            <div className={`${style.newWidth} form-group`}>
                                <label htmlFor="LastName" className='mb-2'>Last Name</label>
                                <input type="text" className={`${style.inpOrg} form-control mb-2`} id="LastName" placeholder="Last Name" />
                            </div>
                            <div className={`${style.newWidth} form-group`}>
                                <label htmlFor="companyName" className='mb-2'>Company Name <span className='text-secondary'>(optional)</span></label>
                                <input type="text" className={`${style.inpOrg} form-control mb-4`} id="companyName" placeholder="Company Name" />
                            </div>
                            <div className={`w-100 form-group`}>
                                <label htmlFor="streetAdress" className='mb-2'>Street Address</label>
                                <input type="text" className={`${style.inpOrg} form-control mb-4`} id="streetAdress" placeholder="Street Address" />
                            </div>
                            <div className={`${style.newWidth} form-group`}>
                                <label htmlFor="country" className='mb-2'>Country</label>
                                <input className={`${style.inpOrg} form-control mb-4`} type="text" id="country" placeholder="Egypt" readOnly></input>
                            </div>
                            <div className={`${style.newWidth} form-group`}>
                                <label htmlFor="city" className='mb-2'>City</label>
                                <CityDropDown />
                            </div>
                            <div className={`${style.newWidth} form-group`}>
                                <label htmlFor="zipCode" className='mb-2'>Zip Code</label>
                                <input type="tel" className={`${style.inpOrg} form-control mb-4`} id="zipCode" placeholder="12345" />
                            </div>
                            <button type="submit" className={`${style.savechange} btn rounded-pill`}>Save Changes</button>
                        </form>
                    </div>
                </div>

                <div className="card shadow mt-5 mb-5">
                    <div className={`${style.cardHeader} card-header`}>
                        <p className="h3">Change Password</p>
                    </div>
                    <div className="card-body d-flex">
                        <form className='d-flex flex-wrap col-md-12 justify-content-between'>
                            <div className={`w-100 form-group`}>
                                <label htmlFor="oldPass" className='mb-2'>Current Password</label>
                                <input type="password" className={`${style.inpOrg} form-control mb-4`} id="oldPass" placeholder="Current Password" />
                            </div>
                            <div className={`w-50 form-group`}>
                                <label htmlFor="newPass" className='mb-2'>New Password</label>
                                <input className={`${style.inpOrg} form-control mb-4`} type="password" id="newPass" placeholder="Password"></input>
                            </div>
                            <div className={`w-50 form-group`}>
                                <label htmlFor="confirmNewPass" className='mb-2'>Confirm Password</label>
                                <input type="password" className={`${style.inpOrg} form-control mb-4`} id="confirmNewPass" placeholder="Password" />
                            </div>
                            <button type="submit" className={`${style.savechange} btn rounded-pill`}>Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
