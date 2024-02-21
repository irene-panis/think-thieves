export const Subheader = ({ content, styles }) => {
  return (
    <div className={`sub-wrapper flex ${styles}`}>
      <span>
        {content}
      </span>
    </div>
  )
}