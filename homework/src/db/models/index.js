import Product from "./Product.js";
import Review from "./Review.js";

Product.hasMany(Review);
Review.belongsTo(Product);

export default { Product, Review };
