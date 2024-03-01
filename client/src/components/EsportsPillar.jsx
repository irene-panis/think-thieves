import { PillarTemplate } from "./PillarTemplate"

export const Esports = () => {
  return (
    <div id="esports" className="esports-wrapper h-[85vh]">
      <PillarTemplate
        header="Dominating the competition, one Championship at a time."
        src="redbull.jpeg"
        p1="The competitive drive for winning Championships is the foundation for all 100 Thieves esports teams. We field championship rosters in League of Legends, Call of Duty, VALORANT."
        p2="Our consistent pursuit of victory solidifies our position as a leading force in esports, setting the standard for excellence in competitive gaming."
        linkTo="/esports"
      />
    </div>
  )
}