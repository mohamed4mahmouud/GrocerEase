import React from 'react';
import style from './Cart.module.css';
import axios from 'axios';


// update quantity function
async function updateQuantity(product_id,quantity){
    let data ={
      "product_id":product_id,
      "quantity":quantity
    }
    let res = await axios.post(`http://127.0.0.1:8000/api/update-quantity`,data);
  console.log(res);
    
  }
export default function CartTotal({cartSubTotal , cartItems}) {
    const handleClick = async () => {
        for (const item of cartItems) {
          await updateQuantity(item.product_id, item.quantity);
        }
      };
  return (
    <div className="col-md-4">
    <div className="card">
      <div className="card-body">
        <h5 className='text-start mb-4'>Cart Total</h5>
        <div className={`${style.cartText} text-start d-flex justify-content-between`}>
          <h6>Subtotal:</h6><h6>{cartSubTotal}$</h6>
        </div>
        <hr />
        {/* TODO: set shipping fee dynamically */}
        <div className={`${style.cartText} text-start d-flex justify-content-between`}>
          <h6>Shipping:</h6><h6>Free</h6>
        </div>
        <hr />
        <div className={`${style.cartText} text-start d-flex justify-content-between`}>
          <h5>Total:</h5><h5>{cartSubTotal} $</h5>
        </div>
        <button className={`${style.mainColor} btn btn-primary w-100 rounded-5 mt-3`} onClick={handleClick}>Procced to checkout</button>
      </div>
    </div>
  </div>
  )
}
