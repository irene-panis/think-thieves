/* eslint-disable react/jsx-key */
import { Collapsible } from "./Collapsible"
import { Esports } from "./Esports"

export const Pillars = () => {
  return (
    <div className="pillars-wrapper flex flex-col items-center h-screen px-20 gap-10">
      <div className="colls-wrapper">
        <Collapsible
          header="Esports"
          content={ <Esports/> }
        />
      </div>
    </div>
  )
}