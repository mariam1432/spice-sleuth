import { AiFillStar } from "react-icons/ai";
interface FoodCardInterface {
  title: string;
  rating: number;
  reviews: number | null;
  createdBy: string;
  id: number;
  imageURL: string;
}
export default function FoodCard({
  title,
  id,
  rating = 0,
  createdBy,
  reviews,
  imageURL,
}: FoodCardInterface) {
  const maxRating = 5;
  const starArray = Array.from({ length: maxRating }, (_, index) => index + 1);
  return (
    <div
      key={id}
      className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg cursor-pointer"
    >
      <div
        className="bg-cover bg-center h-48 flex items-end"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <div className="p-2 w-full">
          <h4 className="text-base text-white font-bold mb-2">{title}</h4>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex">
                {starArray.map((star) => (
                  <span
                    key={star}
                    className={`text-lg ${
                      star <= rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    <AiFillStar />
                  </span>
                ))}
              </div>
              <span className="text-white text-sx">
                {rating} ({reviews} reviews)
              </span>
            </div>
            <div className="text-white text-sx">by {createdBy}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
