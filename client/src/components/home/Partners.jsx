import { Header } from "../Header"
import { Image } from "../Image"
import { Subheader } from "../Subheader"

export const Partners = () => {
  return (
    <div className="partners-wrapper flex flex-col gap-12">
      <Header
        header="Our Partners"
      />
      <div className="img-container flex flex-wrap justify-center align-center gap-10">
        <Image
          src="att.png"
          styles="w-auto h-[100px]"
        />
        <Image
          src="gucci.png"
          styles="w-auto h-[100px]"
        />
        <Image
          src="heineken.png"
          styles="w-auto h-[100px]"
        />
        <Image
          src="lexus.png"
          styles="w-auto h-[100px]"
        />
      </div>
      <div className="partners-text">
        <Subheader
          content="100 THIEVES is home to brands designed to disrupt the industries they compete in."
          divStyles="justify-center text-center"
        />
      </div>
    </div>
  )
}