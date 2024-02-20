export const TextSection = ({ header, children }) => {
  return (
    <div className="text-wrapper w-1/3 flex flex-col gap-5">
      <h2 className="uppercase text-7xl font-bold font-oswald">{header}</h2>
      {children}
    </div>
  )
}