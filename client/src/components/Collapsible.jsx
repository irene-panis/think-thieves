export const Collapsible = ( props ) => {
  return (
    <div>
      <button className="collapsible">{props.header}</button>
      <div className="coll-content">
        {props.content}
      </div>
    </div>
  )
}