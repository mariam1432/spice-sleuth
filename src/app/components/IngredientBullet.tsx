interface Interface {
  title: string;
  selected?: boolean;
  handleClick:(d:any)=>void;
}
export default function IngredientBullet({ title, selected ,handleClick}: Interface) {
  return (
    <button
    onClick={handleClick}
      className={`btn btn-sm text-sm border-0 rounded-sm capitalize  ${
        selected ? "bg-green-500 text-white" : "bg-gray-300"
      }`}
    >
      {title}
    </button>
  );
}
