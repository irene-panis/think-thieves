import { creators } from "../../../../server/utils/creatorData";

export const Creators = ( onCreatorChange ) => {

  return (
    <div>
      <ol className="uppercase overflow-x-auto flex gap-4">
        {creators.map((creator, index) => (
          <li key={index} onClick={() => onCreatorChange(creator)}>
            {creator.name}
          </li>
        ))}
      </ol>
    </div>
  );
}