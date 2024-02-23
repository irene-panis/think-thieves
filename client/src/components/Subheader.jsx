export const Subheader = ( props ) => {
  return (
    <div className={`sub-wrapper flex ${props.divStyles}`}>
      <span className={`${props.spanStyles}`}>
        {props.content}
      </span>
    </div>
  )
}