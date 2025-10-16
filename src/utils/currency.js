// Simple currency helpers for converting USD prices (from API) to PKR
// Reads rate from REACT_APP_USD_TO_PKR if provided; falls back to a default.
export const USD_TO_PKR = Number(process.env.REACT_APP_USD_TO_PKR) || 280; // update as needed

export const usdToPkr = (usd, rate = USD_TO_PKR) => {
  if (typeof usd !== 'number') return 0;
  return Math.round(usd * rate);
};

export const formatPKRFromUSD = (usd, rate = USD_TO_PKR) => {
  const pkr = usdToPkr(usd, rate);
  return `RS ${pkr.toLocaleString('en-PK')}`;
};

export const formatPKR = (pkrValue) => `RS ${Number(pkrValue || 0).toLocaleString('en-PK')}`;

// Discount helpers
export const DEFAULT_DISCOUNT_RATE = 0.7; // 30% OFF
export const discountedUSD = (usd, discountRate = DEFAULT_DISCOUNT_RATE) => {
  if (typeof usd !== 'number') return 0;
  return usd * discountRate;
};
export const formatDiscountedPKRFromUSD = (usd, discountRate = DEFAULT_DISCOUNT_RATE) => {
  return formatPKRFromUSD(discountedUSD(usd, discountRate));
};
