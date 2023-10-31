"use client";
import { Navbar, Footer, RecipeCard, CardCarousel } from "../components";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePrinter,
  AiFillStar,
} from "react-icons/ai";
import { useState } from "react";
import { recipeList } from "../data";
export default function Recipe() {
  const [like, setLike] = useState<boolean>(false);
  const handleLike = () => {
    setLike((prev) => !prev);
  };
  const maxRating = 5;
  const starArray = Array.from({ length: maxRating }, (_, index) => index + 1);
  const rating = 3;
  const reviews = 5;
  return (
    <section>
      <div className="mb-8 md:flex gap-x-10">
        <div className="w-full md:w-3/5 mb-5">
          <div className="bg-orange-200 mb-5">
            <div className="drop-shadow-lg w-full p-5 border-2 flex align-center justify-between">
              <div>
                <h2 className="text-2xl text-white">Cheese cake</h2>
                <a
                  className="text-sm text-red-400 cursor-pointer"
                  href="category"
                >
                  Dessert
                </a>
                <h5 className="text-white text-xs">By : Mariam Khan</h5>
                <h5 className="text-white text-xs">12/02/2023</h5>
              </div>
              <div>
                <button>
                  <AiOutlinePrinter className="text-2xl" />
                </button>
                <button className="text-2xl text-red-600" onClick={handleLike}>
                  {!like ? <AiOutlineHeart /> : <AiFillHeart />}
                </button>
              </div>
            </div>
            <div className="mx-10 my-5">
              <img
                className="block w-full object-cover mb-5"
                src="https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="thumbnail"
              />
              <div className="rounded-lg border-2 border-white p-5 flex-cols gap-2 md:flex justify-center align-center">
                <div className="text-white flex-col">
                  <p>Duration</p>
                  <b>8-12 serving(s)</b>
                </div>
                <div className="text-white flex-col md:border-l-2 md:border-r-2 md:px-2 md:border-white">
                  <p>Prep time</p>
                  <b>20 minutes</b>
                </div>
                <div className="text-white flex-col">
                  <p>Total time</p>
                  <b>55 minutes</b>
                </div>
              </div>
            </div>
            <div className="text-white leading-7  p-8">
              <div className="my-5">
                <div className="flex align-center justify-between">
                  <h2 className="text-2xl">Ingredients</h2>
                  <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn m-1">
                      Convert unit
                    </label>
                    <ul
                      tabIndex={0}
                      className="text-black dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>metric</a>
                      </li>
                      <li>
                        <a>empirial</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="text-sm">
                  <li>Wheat biscuits 20</li>
                  <li>Butter melted 3tbs</li>
                  <li>Cream cheese 1cup</li>
                  <li>Icing sugar 1/2cup</li>
                  <li>Vanilla extract 1/2tsp</li>
                  <li>Mango ice cream half pack</li>
                  <li>Strawberry ice cream half pack</li>
                  <li>Topping for decoration</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl">Directions</h2>
                <p className="text-sm mt-2">
                  Put all the biscuits in a food processor and pulse until
                  crumbled, but not too fine. Add melted butter and process
                  until combined and take out from food processor. Press biscuit
                  mixture evenly over base of ice-cream bowl and freeze for
                  15mins. In separate bowl, add cream cheese, icing sugar and
                  vanilla extract, whisk well to combine, set side. Add half
                  pack of vanilla ice cream and half cream cheese in a bowl and
                  fold together quickly. Repeat same procedure with strawberry
                  ice-cream. Now pour this ice cream mixture into the prepared
                  bowl over the biscuit layer and freeze for 2 hours. Decorate
                  with toppings (any of your choice). Serve chilled and enjoy.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg text-black font-bold">Reviews</h2>
            <p>
              {reviews && reviews > 0
                ? "Share your thoughts on this recipe."
                : "Be the first one to review this recipe!"}
            </p>
            <div className="flex flex-col mb-5">
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
              <span className="text-sx">
                {rating} ({reviews} reviews)
              </span>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              {[...Array(5)].map((i) => (
                <p key={i} className="underline text-sm">
                  Tried this amazing!!
                </p>
              ))}
            </div>
            <div className="flex flex-col justify-start">
              <textarea
                placeholder="Bio"
                className="mb-5 textarea textarea-bordered textarea-md w-full"
              ></textarea>
              <button className="self-end btn btn-primary btn-sm max-w-fit">
                Sign in to post
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5">
          <h2 className="text-2xl text-yellow-500">Related Recipes</h2>
          <div className="grid grid-cols-2 gap-3">
            {recipeList.map((recipe) => (
              <RecipeCard {...recipe} />
            ))}
          </div>
        </div>
      </div>

      <CardCarousel title="You May Also Like" list={recipeList} />
    </section>
  );
}
