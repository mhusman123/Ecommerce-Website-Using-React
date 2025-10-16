<div align="center">

# E Commerce Website Using React

<p>
  <a href="https://github.com/mhusman123/Ecommerce-Website-Using-React/stargazers"><img alt="Stars" src="https://img.shields.io/github/stars/mhusman123/Ecommerce-Website-Using-React?style=for-the-badge&color=FFB000"></a>
  <a href="https://github.com/mhusman123/Ecommerce-Website-Using-React/forks"><img alt="Forks" src="https://img.shields.io/github/forks/mhusman123/Ecommerce-Website-Using-React?style=for-the-badge&color=00B894"></a>
  <a href="#"><img alt="Built with React" src="https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=06112A"></a>
  <a href="#"><img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"></a>
</p>

</div>

PrimeBrothers is a simple, responsive ecommerce frontend built with React and Bootstrap. It includes product listings, product details with recommendations, a cart powered by Redux, and a checkout summary using data from the Fake Store API.


## Recent Update (Oct 16, 2025)

Short summary of code changes (kept minimal):

- Product cards open details on click (full-card click target)
- Smooth hover: slight lift + image zoom on product cards
- Buttons remain functional (Buy Now, Add to Cart)

Files updated:

- `src/components/Products.jsx` — added card onClick navigation and prevented event bubbling on buttons
- `src/components/Products.css` — added hover transitions (lift and zoom)


## About

PrimeBrothers is an ecommerce UI focused on a clean shopping experience: browse curated products, view details and recommendations, add to cart, and review an order summary at checkout. It’s built for speed and clarity, making it a great starting point for connecting a real backend or payments later. The brand reflects a family-run business from District Shikarpur, Sindh, Pakistan.


## Features

- Modern, responsive UI (Bootstrap 5)
- Left sidebar Menu (offcanvas) with navigation, offers, and quick access (Login, Register, Cart)
- Scrolling announcement marquee (CSS animation)
- Product listing with category filters
- Full product titles for easy readability
- Product detail page with "You may also like" slider
- Cart state with quantity controls (Redux)
- Checkout order summary (Free Delivery Across Pakistan, totals)
- Toast notifications for key actions
## Getting Started

Run locally

```bash
  git clone https://github.com/mhusman123/Ecommerce-Website-Using-React.git
```

Go to the project directory

```bash
  cd Ecommerce-Website-Using-React
```

Install dependencies (Node.js LTS recommended)

```bash
  npm install
```

Start the dev server

```bash
  npm start

The app will be available at http://localhost:3000
```



## Tech Stack

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Fake Store API](https://fakestoreapi.com/)

## Project Structure

```
.
├─ public/
│  ├─ index.html
│  └─ assets/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Products.jsx
│  │  ├─ AnnouncementBar.jsx
│  │  ├─ Sidebar.css
│  │  └─ ScrollToTop.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Product.jsx
│  │  ├─ Products.jsx
│  │  ├─ Cart.jsx
│  │  ├─ Checkout.jsx
│  │  ├─ AboutPage.jsx
│  │  └─ ContactPage.jsx
│  ├─ redux/
│  │  ├─ store.js
│  │  ├─ action/
│  │  └─ reducer/
│  ├─ utils/
│  │  └─ currency.js
│  └─ index.js
└─ package.json
```

## Contributing

Contributions are always welcome!
Just raise an issue, we will discuss it.


## Feedback

Repository: https://github.com/mhusman123/Ecommerce-Website-Using-React

For feedback or questions: musmanmahar5312@gmail.com


