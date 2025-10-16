import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Sidebar.css'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    const navigate = useNavigate();

    const closeSidebarThen = (afterHide) => {
        const el = document.getElementById('mobileSidebar');
        if (!el) {
            afterHide && afterHide();
            return;
        }
        const bs = window.bootstrap;
        if (bs && bs.Offcanvas) {
            let instance = bs.Offcanvas.getInstance(el);
            if (!instance) instance = new bs.Offcanvas(el);
            const handler = () => {
                el.removeEventListener('hidden.bs.offcanvas', handler);
                afterHide && afterHide();
            };
            el.addEventListener('hidden.bs.offcanvas', handler, { once: true });
            instance.hide();
        } else {
            // Hard fallback cleanup
            el.classList.remove('show');
            el.setAttribute('aria-hidden', 'true');
            el.style.visibility = 'hidden';
            document.querySelectorAll('.offcanvas-backdrop').forEach(b => b.remove());
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('paddingRight');
            setTimeout(() => afterHide && afterHide(), 0);
        }
    };

    const go = (to) => {
        closeSidebarThen(() => navigate(to));
    };
    return (
        <nav className="navbar navbar-light bg-light py-2 sticky-top">
            <div className="container d-flex align-items-center">
                <button className="btn btn-outline-dark me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileSidebar" aria-controls="mobileSidebar">
                    <i className="fa fa-bars me-2"></i> Menu
                </button>
                <div className="brand-dynamic" title="Brand">
                    {localStorage.getItem('displayName') || 'PrimeBrothers'}
                </div>
                {/* Offcanvas Sidebar for Mobile */}
                <div className="offcanvas offcanvas-start offcanvas-custom" tabIndex="-1" id="mobileSidebar" aria-labelledby="mobileSidebarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title mb-0" id="mobileSidebarLabel">PrimeBrothers</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column">
                        {/* Offers */}
                        <div className="mb-3">
                            <div className="section-title">Offers & Updates</div>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-danger">30% OFF</span>
                                <span className="badge bg-primary">Buy 1 Get 1</span>
                                <span className="badge bg-success">Free Delivery</span>
                            </div>
                        </div>

                        {/* Navigation */}
                        <ul className="navbar-nav mb-3">
                            <li className="nav-item"><button className="sidebar-link" onClick={() => go('/') }><i className="fa fa-home me-2"></i> Home</button></li>
                            <li className="nav-item"><button className="sidebar-link" onClick={() => go('/product') }><i className="fa fa-store me-2"></i> Products</button></li>
                            <li className="nav-item"><button className="sidebar-link" onClick={() => go('/about') }><i className="fa fa-info-circle me-2"></i> About</button></li>
                            <li className="nav-item"><button className="sidebar-link" onClick={() => go('/contact') }><i className="fa fa-envelope me-2"></i> Contact</button></li>
                        </ul>

                        {/* Products section (categories/quick links) */}
                        <div className="mb-3">
                            <div className="section-title">Products</div>
                            <div className="d-flex flex-wrap gap-2">
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => go('/product')}>All</button>
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => go('/product')}>Men's Clothing</button>
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => go('/product')}>Women's Clothing</button>
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => go('/product')}>Jewelery</button>
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => go('/product')}>Electronics</button>
                            </div>
                        </div>

                        {/* Quick Access (Auth & Cart) */}
                        <div className="mb-3">
                            <div className="section-title">Quick Access</div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-outline-dark" onClick={() => go('/login')}><i className="fa fa-sign-in-alt me-2"></i>Login</button>
                                <button className="btn btn-outline-dark" onClick={() => go('/register')}><i className="fa fa-user-plus me-2"></i>Register</button>
                                <button className="btn btn-dark" onClick={() => go('/cart')}><i className="fa fa-cart-shopping me-2"></i>Cart ({state.length})</button>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mt-auto small text-muted">
                            <div className="section-title mb-1">Head Office</div>
                            <div>District Shikarpur, Sindh, Pakistan</div>
                            <div>Queries: <a href="mailto:musmanmahar5312@gmail.com">musmanmahar5312@gmail.com</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar