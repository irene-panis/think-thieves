export const Image = ({ src, caption }) => {
  return (
    <div className="img-wrapper w-1/3 flex flex-col">
      <img src={src}></img>
      <span>{caption}</span>
    </div>
  )
}