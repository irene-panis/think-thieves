export const Subscribe = () => {
  return (
    <div className="flex flex-col gap-5">
      <span>Get the latest updates and promotions from 100 THIEVES!</span>
      <form action="/submit" method="post" className="uppercase">
        <label htmlFor="email" className="text-xs">Email:</label><br/>
        <div className="form-content flex gap-5">
          <input type="email" id="email" name="email" className="text-black p-2" required/>
          <input type="button" value="SUBSCRIBE" className="bg-white border border-black text-black px-2 hover:text-white hover:bg-[#131200] hover:border hover:border-white active:scale-90 duration-200 ease-in-out clickable"/>
        </div>
      </form>
    </div>
  )
}