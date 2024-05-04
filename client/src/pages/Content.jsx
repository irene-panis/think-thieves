import { Creators } from "../components/content/Creators";

export const Content = () => {
  const containerHeight = `calc(100vh - 4rem)`;

  return (
    <div className="content-wrapper w-full h-full" style={{ height: containerHeight }}>
      <Creators/>
    </div>
  )
}