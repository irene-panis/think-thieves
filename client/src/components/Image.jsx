export const Image = ( props ) => {
  return (
    <div className={`img-wrapper flex flex-col ${props.styles} relative overflow-hidden`}>
      <img src={props.src} className={`object-cover w-full h-full rounded-sm ${props.imgStyles}`}/>
      {
        props.caption && (
          <div
            className="img-caption absolute bottom-[2rem] left-[0.9rem] text-white font-oswald font-bold italic uppercase text-2xl drop-shadow-md"
          >
            {props.caption}
          </div>
        )
      }
    </div>
  )
}