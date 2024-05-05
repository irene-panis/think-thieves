import { creators } from "../../../../server/utils/creatorData";

export const Creators = ( {onCreatorChange} ) => {

  return (
    <div className="flex items-center justify-center py-10">
      <ol className="uppercase font-bold overflow-x-auto overflow-y-hidden flex gap-4">
        {creators.map((creator, index) => (
          <li 
            key={index} 
            onClick={() => onCreatorChange(creator)}
            className="font-oswald text-5xl hover:text-zinc-500 duration-200 ease-in-out hover:translate-y-2 p-2"
          >
            {creator.name}
          </li>
        ))}
      </ol>
    </div>
  );
}