import { Footer, Navbar, RecipeCard } from "../components";
import { recipeList } from "../data";

export default function RecipesByCategory() {
  return (
    <section>
      <div>
        <h1 className="text-3xl text-center py-24 font-black">Main Courses</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4"
      // className="flex flex-wrap justify-between align-center gap-5"
      >
        {recipeList.map((recipe) => (
          <RecipeCard {...recipe} />
        ))}
      </div>
    </section>
  );
}
