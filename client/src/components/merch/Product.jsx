export const Product = ({ product }) => {
  return (
    <div className="product bg-[#131200] p-4 flex flex-col gap-2 text-white text-center justify-center items-center font-bold h-[500px] w-[400px]">
      <div 
        className={`product-image flex-grow w-full bg-center bg-cover duration-300 ease-in-out`} 
        style={{ 
          backgroundImage: `url('${product.path}')`
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundImage = `url('${product.hover}')`}
        onMouseLeave={(e) => e.currentTarget.style.backgroundImage = `url('${product.path}')`}
      >  
      </div>
      <div className="h-[80px] flex justify-center items-center">{product.name}</div>
    </div>
  )
}