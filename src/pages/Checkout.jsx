import React, { useMemo, useState } from "react";
import "./Checkout.css";
import { Footer, Navbar, AnnouncementBar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatPKR, usdToPkr } from "../utils/currency";
const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  // Pakistan address fields
  const provinces = useMemo(
    () => ({
      Punjab: [
        { city: "Lahore", zip: "54000" },
        { city: "Faisalabad", zip: "38000" },
        { city: "Rawalpindi", zip: "46000" },
        { city: "Multan", zip: "60000" },
        { city: "Gujranwala", zip: "52250" },
        { city: "Sialkot", zip: "51310" }
      ],
      Sindh: [
        { city: "Karachi", zip: "74200" },
        { city: "Hyderabad", zip: "71000" },
        { city: "Sukkur", zip: "65200" },
        { city: "Larkana", zip: "77150" },
        { city: "Shikarpur", zip: "78100" }
      ],
      "Khyber Pakhtunkhwa": [
        { city: "Peshawar", zip: "25000" },
        { city: "Mardan", zip: "23200" },
        { city: "Abbottabad", zip: "22010" },
        { city: "Swat (Mingora)", zip: "19130" }
      ],
      Balochistan: [
        { city: "Quetta", zip: "87300" },
        { city: "Gwadar", zip: "91200" },
        { city: "Turbat", zip: "92600" }
      ],
      "Islamabad Capital Territory": [
        { city: "Islamabad", zip: "44000" }
      ],
      "Gilgit-Baltistan": [
        { city: "Gilgit", zip: "15100" },
        { city: "Skardu", zip: "16100" }
      ],
      "Azad Jammu & Kashmir": [
        { city: "Muzaffarabad", zip: "13100" },
        { city: "Mirpur", zip: "10250" }
      ]
    }),
    []
  );

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
  let subtotalUSD = 0;
  // Shipping expressed in PKR
  let shipping = 0; // Free Delivery Across Pakistan
    let totalItems = 0;
    state.map((item) => {
      return (subtotalUSD += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
  const subtotalPKR = usdToPkr(subtotalUSD);
  const [payMethod, setPayMethod] = useState('card');
  return (
      <>
        <div className="checkout-hero">
          <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4 glass-card shadow-lg border-0">
                <div className="card-header py-3 glass-header d-flex align-items-center">
                  <i className="fa fa-receipt me-2 text-white"></i>
                  <h5 className="mb-0 text-white">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      <span className="text-muted"><i className="fa fa-box me-2"></i>Products ({totalItems})</span>
                      <span className="fw-bold">{formatPKR(subtotalPKR)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted"><i className="fa fa-truck me-2 text-success"></i>Shipping</span>
                      <span className="badge rounded-pill bg-success-subtle text-success fw-semibold">
                        {shipping === 0 ? "Free Delivery Across Pakistan" : formatPKR(shipping)}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong><i className="fa fa-wallet me-2"></i>Total</strong>
                      </div>
                      <span className="display-6 fw-bold text-primary-gradient">{formatPKR(subtotalPKR + shipping)}</span>
                    </li>
                  </ul>
                  <div className="small text-muted mt-2 d-flex align-items-center gap-2">
                    <i className="fa fa-shield-alt text-primary"></i>
                    <span>Secure checkout — your data is protected.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4 glass-card shadow-lg border-0">
                <div className="card-header py-3 glass-header">
                  <h4 className="mb-0 text-white"><i className="fa fa-map-marker-alt me-2"></i>Billing address</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label htmlFor="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label htmlFor="lastName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="phone" className="form-label">
                          Phone Number (Pakistan)
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="e.g., +92 300 1234567"
                          required
                          pattern="^(\+92|0)?\s?3\d{2}\s?\d{7}$"
                        />
                        <div className="form-text">Format: +92 3XX XXXXXXX or 03XX XXXXXXX</div>
                        <div className="invalid-feedback">
                          Please provide a valid Pakistani mobile number.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="address" className="form-label">
                          Address
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

                      <div className="col-12">
                        <label htmlFor="address2" className="form-label">
                          Address 2{" "}
                          <span className="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Apartment or suite"
                        />
                      </div>

                      <div className="col-md-4 my-1">
                        <label htmlFor="country" className="form-label">Country</label>
                        <select className="form-select" id="country" value="Pakistan" disabled>
                          <option>Pakistan</option>
                        </select>
                      </div>

                      <div className="col-md-4 my-1">
                        <label htmlFor="province" className="form-label">Province</label>
                        <select
                          className="form-select"
                          id="province"
                          required
                          value={selectedProvince}
                          onChange={(e) => {
                            const prov = e.target.value;
                            setSelectedProvince(prov);
                            // reset city/zip when province changes
                            setSelectedCity("");
                            setZipCode("");
                          }}
                        >
                          <option value="">Choose...</option>
                          {Object.keys(provinces).map((prov) => (
                            <option key={prov} value={prov}>{prov}</option>
                          ))}
                        </select>
                        <div className="invalid-feedback">Please select a province.</div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label htmlFor="city" className="form-label">City / District</label>
                        <select
                          className="form-select"
                          id="city"
                          required
                          value={selectedCity}
                          onChange={(e) => {
                            const city = e.target.value;
                            setSelectedCity(city);
                            const found = (provinces[selectedProvince] || []).find(c => c.city === city);
                            setZipCode(found?.zip || "");
                          }}
                          disabled={!selectedProvince}
                        >
                          <option value="">Choose...</option>
                          {selectedProvince && provinces[selectedProvince].map((c) => (
                            <option key={c.city} value={c.city}>{c.city}</option>
                          ))}
                        </select>
                        <div className="invalid-feedback">Please select a city/district.</div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label htmlFor="zip" className="form-label">Postal Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder="e.g., 54000"
                          required
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                        />
                        <div className="invalid-feedback">Postal code required.</div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3"><i className="fa fa-credit-card me-2"></i>Payment</h4>

                    {/* Payment methods */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      <button
                        type="button"
                        className={`payment-method-btn ${payMethod==='card'?'active':''}`}
                        onClick={()=>setPayMethod('card')}
                      >
                        <i className="fa fa-credit-card me-2"></i> Card (Visa/Mastercard)
                      </button>
                      <button
                        type="button"
                        className={`payment-method-btn ${payMethod==='jazzcash'?'active':''}`}
                        onClick={()=>setPayMethod('jazzcash')}
                      >
                        <img src={`${process.env.PUBLIC_URL}/assets/payments/jazzcash.svg`} alt="JazzCash" width="18" height="18" className="me-2"/>
                        JazzCash
                      </button>
                      <button
                        type="button"
                        className={`payment-method-btn ${payMethod==='easypaisa'?'active':''}`}
                        onClick={()=>setPayMethod('easypaisa')}
                      >
                        <img src={`${process.env.PUBLIC_URL}/assets/payments/easypaisa.svg`} alt="Easypaisa" width="18" height="18" className="me-2"/>
                        Easypaisa
                      </button>
                      <button
                        type="button"
                        className={`payment-method-btn ${payMethod==='bank'?'active':''}`}
                        onClick={()=>setPayMethod('bank')}
                      >
                        <i className="fa fa-university me-2"></i> Bank Transfer
                      </button>
                    </div>

                    <div className="row gy-3">
                      {payMethod==='card' && (
                      <>
                      <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          placeholder=""
                          required
                        />
                        <small className="text-muted">
                          Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">
                          Credit card number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-expiration" className="form-label">
                          Expiration
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                      </>
                      )}

                      {payMethod==='jazzcash' && (
                        <>
                          <div className="col-md-6">
                            <label htmlFor="jc-phone" className="form-label">JazzCash Mobile Number</label>
                            <input type="tel" className="form-control" id="jc-phone" placeholder="03XX XXXXXXX"/>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="jc-tid" className="form-label">Transaction ID</label>
                            <input type="text" className="form-control" id="jc-tid" placeholder="Enter Transaction ID"/>
                          </div>
                        </>
                      )}

                      {payMethod==='easypaisa' && (
                        <>
                          <div className="col-md-6">
                            <label htmlFor="ep-phone" className="form-label">Easypaisa Mobile Number</label>
                            <input type="tel" className="form-control" id="ep-phone" placeholder="03XX XXXXXXX"/>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="ep-tid" className="form-label">Transaction ID</label>
                            <input type="text" className="form-control" id="ep-tid" placeholder="Enter Transaction ID"/>
                          </div>
                        </>
                      )}

                      {payMethod==='bank' && (
                        <>
                          <div className="col-md-6">
                            <label htmlFor="bank-name" className="form-label">Select Bank</label>
                            <select id="bank-name" className="form-select">
                              <option>HBL</option>
                              <option>UBL</option>
                              <option>MCB</option>
                              <option>Allied Bank</option>
                              <option>Meezan Bank</option>
                              <option>Bank Alfalah</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="bank-ref" className="form-label">Reference / Transaction No.</label>
                            <input type="text" className="form-control" id="bank-ref" placeholder="Enter reference number"/>
                          </div>
                          <div className="col-12">
                            <small className="text-muted">We will verify your transfer and confirm your order.</small>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Accepted logos row */}
                    <div className="accepted-logos mt-3">
                      <span className="me-2 text-muted">Accepted:</span>
                      <i className="fab fa-cc-visa fa-lg me-2"></i>
                      <i className="fab fa-cc-mastercard fa-lg me-2"></i>
                      <img src={`${process.env.PUBLIC_URL}/assets/payments/jazzcash.svg`} alt="JazzCash" width="22" height="22" className="me-2"/>
                      <img src={`${process.env.PUBLIC_URL}/assets/payments/easypaisa.svg`} alt="Easypaisa" width="22" height="22"/>
                    </div>

                    <hr className="my-4" />

                    <button className="w-100 btn btn-lg gradient-btn" type="submit" disabled>
                      Continue to checkout (Coming soon)
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
  <AnnouncementBar />
  <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
