import { creators } from "../../../../server/utils/creatorData";

export const Creators = ( {onCreatorChange, currentCreator} ) => {

  return (
    <div className="flex items-center justify-center py-4">
      <ol className="uppercase font-bold overflow-x-auto overflow-y-hidden lg:overflow-y-auto h-full disable-scrollbars flex lg:flex-col gap-4">
        {creators.map((creator, index) => (
          <li 
            key={index} 
            onClick={() => onCreatorChange(creator)}
            className={`font-oswald text-5xl lg:text-8xl hover:text-zinc-500 duration-200 ease-in-out p-2 clickable ${currentCreator === creator ? 'text-zinc-500 translate-y-2 lg:translate-x-4 lg:translate-y-0' : ''}`}
          >
            {creator.name}
          </li>
        ))}
      </ol>
    </div>
  );
}