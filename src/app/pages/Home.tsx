import { Hero, CategoryBullet, CardCarousel } from "../components";
import { recipeList } from "../data";
export default function Home() {
  return (
    <main>
      <Hero />
      <CardCarousel title="Featured Recipes" list={recipeList} />
      <div className="flex items-center justify-center flex-col ">
        <h3 className="text-2xl text-black font-bold my-4">
          Find Recipes By Categories
        </h3>
        <div className="w-fit-content flex flex-wrap space-x-2 space-y-2 ">
          {recipeList.map((i) => (
            <CategoryBullet imageURL={i.imageURL} title={i.title} />
          ))}
        </div>
      </div>
      <div className="bg-red-50 my-4 p-5">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Read our Latest Recipe
        </h1>

        <div className="hero-content flex-col lg:flex-row">
          <img
            className="rounded-md"
            src={
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
            height={250}
            width={250}
            alt="Follow us on Twitter"
          />
          <div>
            <h2 className="text-xl font-bold">Raspberry cake</h2>
            <p className="py-6">
              Explore Thousands of Recipes from Around the Globe, Tailored Just
              for You. Explore Thousands of Recipes from Around the Globe,
              Tailored Just for You. Explore Thousands of Recipes from Around
              the Globe, Tailored Just for You. Explore Thousands of Recipes
              from Around the Globe, Tailored Just for You. Explore Thousands of
              Recipes from Around the Globe, Tailored Just for You. Explore
              Thousands of Recipes from Around the Globe, Tailored Just for You.
              Explore Thousands of Recipes from Around the Globe, Tailored Just
              for You. Explore Thousands of Recipes from Around the Globe,
              Tailored Just for You.
            </p>

            <button className="btn bg-yellow-400">Read More</button>
          </div>
        </div>
      </div>
      <CardCarousel title="Newest Recipes" list={recipeList} />
    </main>
  );
}
