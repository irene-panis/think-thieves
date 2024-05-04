export const Creators = () => {
  const creators = ["Nadeshot", "Valkyrae", "Courage", "Brooke", "d4vd", "Enable", "Fuslie", "Hiko", "iiTzTimmy", "JHB", "Jesser", "Jiedel", "JoshChx", "LEGIQN", "Lidyuh", "Lough", "NiceWigg", "NoahJ", "Octane", "PeterPark", "Sparkles", "Vinnie", "Woolz", "Yassuo", "ZackTTG"];

  return (
    <div>
      <ol className="uppercase overflow-x-auto flex gap-4">
        {creators.map((creator, index) => (
          <li key={index}>{creator}</li>
        ))}
      </ol>
    </div>
  );
}