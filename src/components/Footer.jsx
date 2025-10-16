import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-5 border-top pt-5 bg-dark text-white">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold mb-2 text-white">About Us</h5>
            <p className="mb-0 small text-light">
              PrimeBrothers is a family-built ecommerce brand from District Shikarpur, Sindh, Pakistan, offering
              curated fashion, jewelry, and electronics at fair prices. We believe in quality, trust, and smooth shopping.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-2 text-white">Follow us</h5>
            <div className="d-flex gap-3 align-items-center">
              <a
                className="text-white"
                href="https://www.facebook.com/share/16x1aTjsPA/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                className="text-success"
                href="https://wa.me/923048844719"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>
              <a
                className="text-white"
                href="https://www.linkedin.com/in/muhammad-usman-9464b5247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a
                className="text-danger"
                href="https://www.instagram.com/m_usman73?igsh=MTJsZjV1N3o0cjFm"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-2 text-white">Contact</h5>
            <div className="small text-light">
              <div><strong>Head Office:</strong> District Shikarpur, Sindh, Pakistan</div>
              <div>Queries: <a className="text-white" href="mailto:musmanmahar5312@gmail.com">musmanmahar5312@gmail.com</a></div>
            </div>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
      </div>
      <div className="bg-black text-white">
        <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <small>© {year} PrimeBrothers. All rights reserved.</small>
          <small className="mt-2 mt-md-0">Made with ❤️ by Muhammad Usman</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
