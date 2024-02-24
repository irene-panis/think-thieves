export const Image = ({ src, styles }) => {
  return (
    <div className={`img-wrapper flex flex-col ${styles}`}>
      <img src={src} className="object-cover object-center w-full h-full rounded-md"></img>
    </div>
  )
}