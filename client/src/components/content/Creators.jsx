import { creators } from "../../../../server/utils/creatorData";

export const Creators = ( {onCreatorChange} ) => {

  return (
    <div>
      <ol className="uppercase font-bold overflow-x-auto flex gap-4">
        {creators.map((creator, index) => (
          <li 
            key={index} 
            onClick={() => onCreatorChange(creator)}
            className="font-oswald"
          >
            {creator.name}
          </li>
        ))}
      </ol>
    </div>
  );
}