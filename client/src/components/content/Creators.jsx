import { creators } from "../../../../server/utils/creatorData";

export const Creators = ( {onCreatorChange} ) => {

  return (
    <div className="flex items-center justify-center py-10">
      <ol className="uppercase font-bold overflow-x-auto flex gap-4">
        {creators.map((creator, index) => (
          <li 
            key={index} 
            onClick={() => onCreatorChange(creator)}
            className="font-oswald text-5xl"
          >
            {creator.name}
          </li>
        ))}
      </ol>
    </div>
  );
}