import React, { useState } from "react";
import { BiSearch } from "react-icons/Bi";
import { AiFillPrinter } from "react-icons/ai";
import { RecipeCardWithDescription } from "../components";
import Accordion from "../components/Accordion";
import { recipeList, ingredientsList } from "../data";
const ShoppingList = () => {
  const [open, setOpen] = React.useState<string | number>("");
  const [list, setList] = React.useState<any>(ingredientsList);
  const [selectedRecipes, setSelectedRecipes] = useState<any[]>(recipeList);

  const handleSelectedRecipes = (id: number) => {
    setSelectedRecipes((prev: any) => {
      let updatedList = [...prev];
      updatedList = updatedList.map((item) => {
        if (item.id === id) {
          return { ...item, selected: !item.selected };
        }
        return item;
      });
      return updatedList;
    });
  };
  const handleSelected = (category: string, id: number) => {
    setList((prevState: any) => {
      const updatedList = { ...prevState };
      updatedList[category] = updatedList[category].map(
        (item: { id: number; selected: any }) => {
          if (item.id === id) {
            return { ...item, selected: !item.selected };
          }
          return item;
        }
      );
      return updatedList;
    });
  };

  return (
    <main className="flex flex-col gap-5 md:flex-row ">
      <section className="w-2/3 w-full mr-5">
        <h1 className="text-2xl mb-5">Add recipes to your list</h1>

        <div className="flex flex-row justify-between mb-5 gap-2">
          <input
            type="search"
            placeholder="Find"
            className="input input-bordered w-full w-full"
          />
          <button className="btn bg-yellow-400">
            <BiSearch />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {selectedRecipes.map((data: any) => (
            <RecipeCardWithDescription
              key={data.id}
              liked={data?.selected}
              handleLike={() => handleSelectedRecipes(data.id)}
              handleLink={() => console.log(data.id)}
              title={data.title}
              category={data.category}
              id={data.id}
              imgURL={data.imageURL}
            />
          ))}
        </div>
      </section>
      <section className="w-1/3 bg-slate-50 shadow-lg flex flex-col w-full p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl mb-5">Shopping list</h1>
          <button className="btn btn-sm bg-yellow-400">
            <AiFillPrinter />
          </button>
        </div>

        <div className="flex flex-col w-auto gap-4">
          {Object.entries(list).map(([key, value]: any) => (
            <Accordion
              handleChecked={(d) => setOpen(d)}
              handleSelected={(d) => handleSelected(key, d.id)}
              title={key}
              open={open === key}
              value={key}
              dataList={value}
              type="list"
            />
          ))}
        </div>
      </section>
    </main>
  );
};
export default ShoppingList;
