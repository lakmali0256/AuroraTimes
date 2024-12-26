import React from "react";
import ProductCard from "../product_cart/ProductCard";
import './HotCollection.css'



function HotCollection() {
  return (
    <div className="new-main-container py-16">
      <div className="secound">
        <p className="sub ">all time</p>
        <p className="collection-title ">
          Hot Collection
        </p>
        <div className="list">
          <ProductCard
            image={"/upload/1.webp"}
            availability={"Out Of Stock"}
            price={"$190"}
            disprice={"$130"}
            description={"Calendrier"}
          />
          <ProductCard
            image={"/upload/2.webp"}
            availability={"Out Of Stock"}
            price={"$130"}
            disprice={"$110"}
            description={"Corso"}
          />
          <ProductCard
            image={"/upload/3.webp"}
            availability={"Out Of Stock"}
            price={"$110"}
            disprice={"$90"}
            description={"Promaster Dive"}
          />
          <ProductCard
            image={"/upload/5.webp"}
            availability={"Available"}
            price={"$100"}
            disprice={"$90"}
            description={"PCAT"}
          />
        </div>
      </div>
    </div>
  );
}

export default HotCollection;