import { Foundations } from "./Foundations";
import { Jersey } from "./Jersey";
import { Pokemon } from "./Pokemon";
import { LAT } from "./LAT";

export const ApparelContainer = ({ apparel }) => {
  let componentToRender;

  switch (apparel) {
    case `FOUNDATIONS SS'24`:
      componentToRender = <Foundations/>
      break;
    case `2024 PRIMARY JERSEY`:
      componentToRender = <Jersey/>
      break;
    case `100T x POKEMON`:
      componentToRender = <Pokemon/>
      break;
    case `LA THIEVES`:
      componentToRender = <LAT/>
      break;
  }
  return componentToRender;
}