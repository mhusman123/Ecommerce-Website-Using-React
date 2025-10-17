import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Sidebar.css'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    const navigate = useNavigate();
    // Safely resolve brand name: only allow short, clean names
    const rawName = (typeof window !== 'undefined') ? localStorage.getItem('displayName') : null;
    const isValidName = (name) => /^[a-zA-Z0-9 &-]{2,24}$/.test(name || '');
    const brandName = isValidName(rawName) ? rawName : 'PrimeBrothers';

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

    // Theme toggle (light/dark) with persistence
    const [dark, setDark] = useState(false);
    useEffect(() => {
        const saved = localStorage.getItem('themeDark') === '1';
        setDark(saved);
        document.body.classList.toggle('theme-dark', saved);
    }, []);
    const toggleTheme = () => {
        const next = !dark;
        setDark(next);
        document.body.classList.toggle('theme-dark', next);
        localStorage.setItem('themeDark', next ? '1' : '0');
    };
    return (
        <nav className="navbar navbar-light bg-light py-2 sticky-top">
            <div className="container d-flex align-items-center">
                <div className="brand-dynamic me-3" title="Brand">
                    {brandName}
                </div>
                {/* Center promo ticker */}
                <div className="promo-ticker flex-grow-1 mx-3 d-none d-md-flex align-items-center justify-content-center">
                    <div className="promo-content">
                        <span className="promo-item">
                            <i className="fa fa-fire text-danger me-2"></i>
                            <strong>30% OFF</strong> on All Items
                        </span>
                        <span className="promo-divider">•</span>
                        <span className="promo-item">
                            <i className="fa fa-gift text-primary me-2"></i>
                            <strong>Buy 1 Get 1 Free</strong>
                        </span>
                        <span className="promo-divider">•</span>
                        <span className="promo-item">
                            <i className="fa fa-truck text-success me-2"></i>
                            <strong>Free Delivery</strong> Across Pakistan
                        </span>
                    </div>
                </div>
                <div className="d-flex align-items-center ms-auto gap-2">
                    <button
                        className="btn btn-sm btn-outline-secondary d-flex align-items-center"
                        onClick={toggleTheme}
                        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={dark ? 'Light mode' : 'Dark mode'}
                    >
                        {dark ? (
                            <>
                                <i className="fa fa-sun me-2"></i>
                                Light
                            </>
                        ) : (
                            <>
                                <i className="fa fa-moon me-2"></i>
                                Dark
                            </>
                        )}
                    </button>
                    <button className="btn menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileSidebar" aria-controls="mobileSidebar">
                        <i className="fa fa-bars me-2"></i> Menu
                    </button>
                </div>
                {/* Offcanvas Sidebar for Mobile */}
                <div className="offcanvas offcanvas-end offcanvas-custom" tabIndex="-1" id="mobileSidebar" aria-labelledby="mobileSidebarLabel">
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