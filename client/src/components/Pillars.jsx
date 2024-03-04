/* eslint-disable react/jsx-key */
import { Collapsible } from "./Collapsible"
import { Esports } from "./EsportsPillar"
import { Content } from "./ContentPillar"
import { Apparel } from "./ApparelPillar"
import { Header } from "./Header"

export const Pillars = () => {

  return (
    <div className="pillars-wrapper flex flex-col px-20">
      <Header
        header="Our Pillars"
      />
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