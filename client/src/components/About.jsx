import { TextSection } from "./TextSection";
import { Image } from "./Image";

export const About = () => {
  return (
    <div className="about-wrapper flex justify-evenly items-center h-screen">
      <TextSection
        header="We're in thief territory.">
        <p className="text-xl"><b>100 Thieves</b>, founded by former Call of Duty professional <b>Matthew &quot;Nadeshot&quot; Haag</b>, is a premier esports organization renowned for its dominant presence in Valorant, League of Legends, and Call of Duty.</p>
        <p className="text-xl">Beyond competitive gaming, 100 Thieves boasts a roster of influential content creators and offers a stylish line of apparel, making it a powerhouse both on and off the digital battlefield.</p>
      </TextSection>
      <Image
        src="/Nadeshot.jpeg"
        caption="100 Thieves CEO, Matthew 'Nadeshot' Haag"
      />
    </div>
  )
}