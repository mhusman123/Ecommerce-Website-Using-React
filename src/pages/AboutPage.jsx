import React from 'react'
import { Footer, Navbar, AnnouncementBar } from "../components";
const AboutPage = () => {
  return (
    <>
  <AnnouncementBar />
  <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center mb-2">
          Welcome to <strong>PrimeBrothers</strong> — an ecommerce brand built on family, trust, and quality.
          The name <strong>PrimeBrothers</strong> reflects our story: we are eight brothers, and this brand is a
          tribute to our bond and commitment to build something meaningful together. We started PrimeBrothers to
          bring premium products at fair prices, with a promise of honest service and a smooth shopping experience.
        </p>
        <p className="lead text-center mb-2">
          We curate a range of products including <em>men’s and women’s fashion</em>, <em>jewelry</em>, and
          <em> electronics</em>, focusing on style, durability, and value. Every item we list is handpicked with care,
          because we want our customers to feel confident about what they buy from us.
        </p>
        <p className="lead text-center mb-2">
          <strong>What PrimeBrothers means to us:</strong> it’s more than a name — it’s a promise. Eight brothers, one vision.
          We’re building a business we can proudly run on our brothers’ names — with integrity, consistency, and respect.
        </p>
        <p className="lead text-center mb-0">
          <strong>Head Office:</strong> PrimeBrothers, District Shikarpur, Sindh, Pakistan<br/>
          <span>Customer Support: Mon–Sat, 10:00 AM – 7:00 PM PKT</span>
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage