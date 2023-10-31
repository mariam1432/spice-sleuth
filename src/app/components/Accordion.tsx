import React from "react";
import { IngredientBullet } from ".";
interface AccordionInterface {
  title: string;
  value: string | number;
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
          <p>no ingredients in this list yet!</p>
        )}
      </div>
    </div>
  );
}
