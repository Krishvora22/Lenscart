import React from "react";
import HomeItem from "../src/components/HomeItem";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Category() {
  const { gender } = useParams();
  let items = useSelector((store) => store.items);
  const categoryProds = items.filter(item => item.category === gender);

  return (
    <>
      <div className="items-container">
        {categoryProds.map((categoryProd) => (
          <HomeItem key={categoryProd.id} item={categoryProd} />
        ))}
      </div>
    </>
  );
}

export default Category;
