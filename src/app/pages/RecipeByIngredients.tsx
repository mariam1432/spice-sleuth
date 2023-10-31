import React from "react";
import { BiSearch } from "react-icons/Bi";
import { RecipeCardWithDescription } from "../components";
import Accordion from "../components/Accordion";
import { ingredientsList } from "../data";
export default function RecipeByIngredients() {
  const [open, setOpen] = React.useState<string | number>("Produce");
  const [selectedList, setSelectedList] = React.useState(ingredientsList);

  const handleSelected = (category: string, id: number) => {
    setSelectedList((prevState) => {
      const updatedList = { ...prevState };
      updatedList[category] = updatedList[category].map((item) => {
        if (item.id === id) {
          return { ...item, selected: !item.selected };
        }
        return item;
      });
      return updatedList;
    });
  };

  return (
    <section className="flex flex-col gap-5 md:flex-row">
      <div className="w-full md:w-1/3">
        <h1 className="text-2xl mb-5">Pantry</h1>

        <div className="flex flex-row justify-between mb-5">
          <input
            type="search"
            placeholder="Search ingredients"
            className="input input-bordered w-full max-w-xs "
          />
          <button className="btn bg-yellow-400">
            <BiSearch />
          </button>
        </div>
        <div className="flex flex-col w-auto gap-4">
          {Object.entries(selectedList).map(([key, value]) => (
            <Accordion
              handleChecked={(d) => setOpen(d)}
              handleSelected={(d) => handleSelected(key, d.id)}
              title={key}
              open={open === key}
              value={key}
              dataList={value}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-2/3 ">
        <div>
          <h1 className="text-2xl mb-5">SpiceSleuth</h1>

          <div className="flex flex-row justify-between mb-5 gap-2">
            <input
              type="search"
              placeholder="Find"
              className="input input-bordered w-full"
            />
            <button className="btn bg-yellow-400">
              <BiSearch />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[...Array(20)].map((a) => (
            <RecipeCardWithDescription
              key={a}
              liked
              title="Tomato soup"
              category="Soup"
              ingredients={4}
              msg="You are missing only 1 ingrdient"
              id={2}
              imgURL="https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c291cHxlbnwwfHwwfHx8MA%3D%3D"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
