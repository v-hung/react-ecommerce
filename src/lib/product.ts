import { Product } from "../types/product";

export const getProductPercent = (product: Product) => {
  if (product.compareAtPrice <= 0 || product.price <= 0 || product.price >= product.compareAtPrice) {
    return 0
  }

  const discount = ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100;
  return Math.round(discount);
}