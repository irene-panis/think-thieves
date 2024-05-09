import { Product } from "./Product"

export const FeaturedProducts = ({ productsArray }) => {
  return (
    <div className="featured-container flex flex-wrap gap-4">
      {
        productsArray.map((product, index) => (
          <Product key={index} product={product}/>
        ))
      }
    </div>
  )
}