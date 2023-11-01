import React from "react";
import { IngredientBullet } from ".";
interface AccordionInterface {
  title: string;
  value: string | number;
  type?: "grid" | "list";
  handleChecked: (value: string | number) => void;
  handleSelected: (values: any) => void;

  dataList: { id: string | number; title: string; selected: boolean }[];
  open?: boolean;
}
export default function Accordion({
  title,
  value,
  handleChecked,
  handleSelected,
  dataList,
  open,
  type = "grid",
}: AccordionInterface) {
  return (
    <div className="collapse collapse-arrow bg-base-100 rounded-md">
      <input
        type="radio"
        name="my-accordion-2"
        value={value}
        checked={open}
        onChange={(e) => handleChecked(e.target.value)}
      />
      <div className="collapse-title text-lg font-medium">{title}</div>
      <div className="collapse-content border-t-2 pt-2">
        {dataList.length > 0 ? (
          type === "grid" ? (
            <div className="flex flex-wrap gap-2">
              {dataList.map((data) => (
                <IngredientBullet
                  key={data.id}
                  title={data.title}
                  selected={data.selected}
                  handleClick={() => handleSelected(data)}
                />
              ))}
            </div>
          ) : (
            <div>
              {dataList.map((data) => (
                <div
                  key={data.id}
                  className="flex flex-row items-center justify-between"
                >
                  <p className={`${data.selected && "line-through"}`}>
                    {data.title}
                  </p>
                  <input
                    type="checkbox"
                    checked={data.selected}
                    className="checkbox checkbox-xs"
                    onClick={() => handleSelected(data)}
                  />
                </div>
              ))}
            </div>
          )
        ) : (
          <p>no ingredients in this list yet!</p>
        )}
      </div>
    </div>
  );
}
