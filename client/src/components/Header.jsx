export const Header = ( props ) => {
  return (
    <div className={`text-wrapper flex ${props.divStyles}`}>
      <h2 className={`uppercase text-7xl font-bold font-oswald ${props.textStyles}`}>{props.header}</h2>
    </div>
  )
}