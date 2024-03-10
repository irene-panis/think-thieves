/* eslint-disable react/jsx-key */
import { Collapsible } from "./Collapsible"
import { EsportsPillar } from "./EsportsPillar"
import { ContentPillar } from "./ContentPillar"
import { ApparelPillar } from "./ApparelPillar"
import { Header } from "../Header"

export const Pillars = () => {

  return (
    <div className="pillars-wrapper flex flex-col">
      <Header
        header="Our Pillars"
      />
      <div className="colls-wrapper w-full">
        <Collapsible
          header="Esports"
          content={ <EsportsPillar/> }
        />
        <Collapsible
          header="Content"
          content={ <ContentPillar/> }
        />
        <Collapsible
          header="Apparel"
          content={ <ApparelPillar/> }
        />
      </div>
    </div>
  )
}