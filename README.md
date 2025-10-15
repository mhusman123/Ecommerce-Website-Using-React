<div align="center">

# E Commerce Website Using JavaScript

<p>
  <a href="https://github.com/mhusman123/Ecommerce-Website-Using-React/stargazers"><img alt="Stars" src="https://img.shields.io/github/stars/mhusman123/Ecommerce-Website-Using-React?style=for-the-badge&color=FFB000"></a>
  <a href="https://github.com/mhusman123/Ecommerce-Website-Using-React/forks"><img alt="Forks" src="https://img.shields.io/github/forks/mhusman123/Ecommerce-Website-Using-React?style=for-the-badge&color=00B894"></a>
  <a href="#"><img alt="Built with React" src="https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=06112A"></a>
  <a href="#"><img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"></a>
</p>

</div>

PrimeBrothers is a simple, responsive ecommerce frontend built with JavaScript (React) and Bootstrap. It includes product listings, product details with recommendations, a cart powered by Redux, and a checkout summary using data from the Fake Store API. Prices are shown in Pakistani Rupees (RS) with a configurable conversion rate.


## Demo

Live Demo (optional): add your deployment URL here.

## Features

- Modern, responsive UI (Bootstrap 5)
- Product listing with category filters
- Product detail page with "You may also like" slider
- Cart state with quantity controls (Redux)
- Checkout order summary (subtotal, shipping, total)
- Toast notifications for key actions
- Currency: PKR (RS) with USD→PKR conversion via environment variable
## Getting Started

Clone the project

 

## Run Locally

Clone the project

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

## Configuration

Optional environment variables:

- `REACT_APP_USD_TO_PKR` — override the USD→PKR conversion rate used for displaying RS prices. Example:

```bash
# .env
REACT_APP_USD_TO_PKR=285
```

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


