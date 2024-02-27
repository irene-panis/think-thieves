/* eslint-disable react/jsx-key */
import { Collapsible } from "./Collapsible"
import { Esports } from "./Esports"
import { Content } from "./Content"
import { Apparel } from "./Apparel"

export const Pillars = () => {

  return (
    <div className="pillars-wrapper flex flex-col items-center h-screen px-20 gap-10">
      <div className="colls-wrapper w-full">
        <Collapsible
          header="Esports"
          content={ <Esports/> }
        />
        <Collapsible
          header="Content"
          content={ <Content/> }
        />
        <Collapsible
          header="Apparel"
          content={ <Apparel/> }
        />
      </div>
    </div>
  )
}