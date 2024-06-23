import { nanoid } from "nanoid";
import React, { useState } from "react";
import SingleItem from "./SingleItem";

const Items = ({ itemsInTotal, removeItem, editItem }) => {
  return (
    <div className="item_container">
      {itemsInTotal.map((item) => {
        return (
          <div key={nanoid()} className="itemsdiv">
            <SingleItem
              item={item}
              editItem={editItem}
              removeItem={removeItem}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Items;
