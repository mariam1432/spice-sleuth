import { AiOutlineExport, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
interface Interface {
  imgURL: string;
  title: string;
  category: string;
  msg?: string;
  ingredients: number;
  liked?: boolean;
  id: number;
}
export default function RecipeCardWithDescription({
  title,
  imgURL,
  liked,
  id,
  category,
  msg,
  ingredients,
}: Interface) {
  const handleLike = () => console.log("heart", id);

  return (
    <div className="flex rounded-md bg-base-100 shadow-xl h-32  w-full md:w-auto">
      <img
        src={imgURL}
        alt="Movie"
        className="block w-1/3 h-full object-cover rounded-l-md"
      />
      <div className="p-2 w-2/3">
        <div className="flex justify-between">
          <h2 className="text-md">{title}</h2>
          <div>
            <button className="text-lg text-red-600" onClick={handleLike}>
              {!liked ? <AiOutlineHeart /> : <AiFillHeart />}
            </button>
            <button onClick={() => console.log(id)}>
              <AiOutlineExport className="text-md" />
            </button>
          </div>
        </div>
        <a className="text-red-400 text-800 text-md cursor-pointer">
          {category}
        </a>
        <p className="text-xs text-slate-400">
          You have all {ingredients} ingredients
        </p>
        {msg ? <p className="text-xs text-red-500">{msg}</p> : null}
      </div>
    </div>
  );
}
