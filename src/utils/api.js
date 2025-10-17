// API utilities to talk to backend (PHP/XAMPP) or fall back to Fake Store API

export const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost/primebrothers-api";

const withQuery = (url, params = {}) => {
  const qs = new URLSearchParams(params).toString();
  return qs ? `${url}?${qs}` : url;
};

export async function getProducts(category) {
  try {
    const url = withQuery(`${API_BASE}/products.php`, category ? { category } : undefined);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    // Fallback to Fake Store API if backend is unreachable
    const alt = category
      ? `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`
      : `https://fakestoreapi.com/products`;
    const res = await fetch(alt);
    return await res.json();
  }
}

export async function getProductById(id) {
  try {
    const res = await fetch(withQuery(`${API_BASE}/products.php`, { id }));
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await res.json();
  }
}
