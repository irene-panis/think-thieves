import { Product } from "./Product"
import { Header } from "../Header" 

export const FeaturedProducts = ({ productsArray }) => {
  return (
    <div className="featured-container flex flex-col gap-2 p-4">
      <Header header="Featured Products"/>
      <div className="products-container flex flex-wrap gap-4">
        {
          productsArray.map((product, index) => (
            <Product key={index} product={product}/>
          ))
        }
      </div>
    </div>
  )
}