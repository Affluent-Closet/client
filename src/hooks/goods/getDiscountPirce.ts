function getDiscountPirce(originalPrice: number, discountRate: number) {
  return originalPrice * ((100 - discountRate) / 100);
}
export default getDiscountPirce;
