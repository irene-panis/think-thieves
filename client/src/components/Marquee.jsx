/* eslint-disable react/jsx-no-comment-textnodes */
export const Marquee = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee enable-animation marquee--hover-pause">
        <ul className="marquee__content">
          <li className="italic">100T</li>
          <li> // </li>
          <li className="italic">esports</li>
          <li> // </li>
          <li className="italic">content</li>
          <li> // </li>
          <li className="italic">apparel</li>
          <li> // </li>
        </ul>

        <ul aria-hidden="true" className="marquee__content">
          <li className="italic">100T</li>
          <li> // </li>
          <li className="italic">esports</li>
          <li> // </li>
          <li className="italic">content</li>
          <li> // </li>
          <li className="italic">apparel</li>
          <li> // </li>
        </ul>

        
      </div>
    </div>
  )
}