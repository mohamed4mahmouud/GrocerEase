import React from "react";
import { OrderSummery } from "./Order Summery";

export const BillingInfo = () => {
    return (
        <>
            <div className="checkout">
                <section className="py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="row">
                            <OrderSummery />
                            <div className="col-md-8 order-md-1">
                                <h4 className="mb-3 checkout">
                                    Billing Information
                                </h4>
                                <form className="needs-validation" novalidate>
                                    <div className="row">
                                        <div className="col-md-6 mb-3 checkout">
                                            <label
                                                for="firstName"
                                                className="form-label"
                                            >
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                placeholder="Your first name"
                                                value=""
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3 checkout">
                                            <label
                                                for="lastName"
                                                className="form-label"
                                            >
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                placeholder="Your last name"
                                                value=""
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>
                                        <div className="mb-3 checkout">
                                            <label
                                                for="email"
                                                className="form-label"
                                                required
                                            >
                                                Email{" "}
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="you@example.com"
                                            />
                                            <div className="invalid-feedback">
                                                Please enter a valid email
                                                address for shipping updates.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 checkout">
                                        <label
                                            for="address"
                                            className="form-label"
                                        >
                                            Street Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            placeholder="1234 Main St"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5 mb-3 checkout">
                                            <label
                                                for="country"
                                                className="form-label"
                                            >
                                                Country / Region
                                            </label>
                                            <select
                                                className="form-select d-block w-100"
                                                id="country"
                                                required
                                            >
                                                <option value="">Select</option>
                                                <option>United States</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3 checkout">
                                            <label
                                                for="state"
                                                className="form-label"
                                            >
                                                States
                                            </label>
                                            <select
                                                className="form-select d-block w-100"
                                                id="state"
                                                required
                                            >
                                                <option value="">Select</option>
                                                <option>California</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3 checkout">
                                            <label
                                                for="zip"
                                                className="form-label"
                                            >
                                                Zip Code
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="zip"
                                                placeholder="Zip Code"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Zip code required.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="same-address"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="same-address"
                                        >
                                            Ship to a different address
                                        </label>
                                    </div>
                                    <hr className="mb-4" />
                                    <h4 className="mb-3">Additional Info</h4>
                                    <div className="mb-3">
                                        <label
                                            for="address"
                                            className="form-label"
                                        >
                                            Order Notes{" "}
                                            <span className="text-muted">
                                                (Optional)
                                            </span>
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="notes"
                                            placeholder="Notes about your order, e.g. special notes for delivery"
                                        ></textarea>
                                    </div>
                                    <hr className="mb-4" />
                                    <h4 class="mb-3">Payment</h4>
                                    <div class="d-block my-3">
                                        <div class="form-check">
                                            <input
                                                id="credit"
                                                name="paymentMethod"
                                                type="radio"
                                                class="form-check-input"
                                                checked
                                                required
                                            />
                                            <label
                                                class="form-check-label"
                                                for="credit"
                                            >
                                                Credit card
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                id="debit"
                                                name="paymentMethod"
                                                type="radio"
                                                class="form-check-input"
                                                required
                                            />
                                            <label
                                                class="form-check-label"
                                                for="debit"
                                            >
                                                Paypal
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                id="paypal"
                                                name="paymentMethod"
                                                type="radio"
                                                class="form-check-input"
                                                required
                                            />
                                            <label
                                                class="form-check-label"
                                                for="paypal"
                                            >
                                                Cash on Delivery
                                            </label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label
                                                for="cc-name"
                                                class="form-label"
                                            >
                                                Name on card
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="cc-name"
                                                placeholder=""
                                                required
                                            />
                                            <small class="text-muted">
                                                Full name as displayed on card
                                            </small>
                                            <div class="invalid-feedback">
                                                Name on card is required
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label
                                                for="cc-number"
                                                class="form-label"
                                            >
                                                Credit card number
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="cc-number"
                                                placeholder=""
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Credit card number is required
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3 mb-3">
                                            <label
                                                for="cc-expiration"
                                                class="form-label"
                                            >
                                                Expiration
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="cc-expiration"
                                                placeholder=""
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Expiration date required
                                            </div>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label
                                                for="cc-expiration"
                                                class="form-label"
                                            >
                                                CVV
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="cc-cvv"
                                                placeholder=""
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Security code required
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        class="btn px-4 rounded-pill greencart text-white fw-medium"
                                        type="button"
                                    >
                                        Place Order
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
