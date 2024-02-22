export const Header = ( props ) => {
  return (
    <div className={`text-wrapper flex ${props.divStyles}`}>
      <h2 className={`uppercase font-bold font-oswald ${props.textStyles} leading-none`}>{props.header}</h2>
    </div>
  )
}