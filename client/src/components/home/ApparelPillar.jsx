import { PillarTemplate } from "./PillarTemplate"

export const ApparelPillar = () => {
  return (
    <div id="apparel" className="apparel-wrapper">
    <PillarTemplate
      header="Bridging the gap between gaming and fashion."
      src="poke.jpeg"
      p1="100 Thieves apparel transcends the boundary of what streetwear can be."
      p2="Our collaborations with the most iconic names in entertainment today showcase our commitment to merging gaming and popular culture with cutting-edge fashion, creating apparel that speaks to both gamers and fashion enthusiasts alike."
      linkTo="/apparel"
    />
  </div>
  )
}