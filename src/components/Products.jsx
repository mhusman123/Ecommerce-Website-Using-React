import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { formatPKRFromUSD, formatDiscountedPKRFromUSD } from "../utils/currency";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [activeCat, setActiveCat] = useState('all');
  const mountedRef = useRef(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const goToDetails = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    mountedRef.current = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (mountedRef.current) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        setActiveCat('all');
      }
    };

    getProducts();
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className={`filter-btn m-2 ${activeCat === 'all' ? 'active' : ''}`}
            onClick={() => { setFilter(data); setActiveCat('all'); }}
          >
            All
          </button>
          <button
            className={`filter-btn m-2 ${activeCat === 'men' ? 'active' : ''}`}
            onClick={() => { filterProduct("men's clothing"); setActiveCat('men'); }}
          >
            Men's Clothing
          </button>
          <button
            className={`filter-btn m-2 ${activeCat === 'women' ? 'active' : ''}`}
            onClick={() => { filterProduct("women's clothing"); setActiveCat('women'); }}
          >
            Women's Clothing
          </button>
          <button
            className={`filter-btn m-2 ${activeCat === 'jewelery' ? 'active' : ''}`}
            onClick={() => { filterProduct("jewelery"); setActiveCat('jewelery'); }}
          >
            Jewelery
          </button>
          <button
            className={`filter-btn m-2 ${activeCat === 'electronics' ? 'active' : ''}`}
            onClick={() => { filterProduct("electronics"); setActiveCat('electronics'); }}
          >
            Electronics
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            >
              <div
                className="card text-center h-100 shadow-sm border-0 product-card"
                key={product.id}
                onClick={() => goToDetails(product.id)}
                role="button"
                aria-label={`View details for ${product.title}`}
              >
                <img
                  className="card-img-top p-2 product-img"
                  src={product.image}
                  alt={product.title}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="card-title text-start mb-1">
                      {product.title}
                    </h6>
                    <span className="badge bg-danger">30% OFF</span>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted text-decoration-line-through small">
                        {formatPKRFromUSD(product.price)}
                      </span>
                      <span className="lead fw-bold">
                        {formatDiscountedPKRFromUSD(product.price)}
                      </span>
                    </div>
                  </li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <div className="d-flex flex-wrap gap-2 mb-2 justify-content-center">
                    <span className="badge bg-success">Free Delivery</span>
                    <span className="badge bg-primary">Buy 1 Get 1 Free</span>
                  </div>
                  <Link
                    to={"/product/" + product.id}
                    className="btn btn-dark m-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="products-section rounded-3 p-3">
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
