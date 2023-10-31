import { RecipeCard, CategoryBullet } from ".";
interface listInterface {
  id: number;
  title: string;
  imageURL: string;
  rating: number;
  reviews: number;
  createdBy: string;
}

interface CardCarouselInterface {
  title: string;
  list: listInterface[];
}
export default function CardCarousel({ title, list }: CardCarouselInterface) {
  return (
    <div >
      <h3 className="text-lg text-black font-bold">{title}</h3>
      <div className="carousel carousel-center w-full p-4 space-x-4 bg-transparent rounded-box">
        {list.map(({ id, title, imageURL, rating, reviews, createdBy }) => (
          <div className="carousel-item" key={id}>
            <RecipeCard
              id={id}
              title={title}
              imageURL={imageURL}
              rating={rating}
              reviews={reviews}
              createdBy={createdBy}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
}
