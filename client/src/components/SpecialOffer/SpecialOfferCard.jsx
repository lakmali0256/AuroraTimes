import React, { useState } from "react";
import "./SpecialOfferCard.css"; // Import custom CSS or use inline styles.

const SpecialOfferCard = () => {
  const [mainImage, setMainImage] = useState("./upload/x1.webp"); // Default main image

  const handleImageChange = (image) => {
    setMainImage(image);
  };

  return (
    <div className="product-card">
      <div className="product-image-section">
        <div className="thumbnail-images">
          <img
            src="./upload/x1.webp"
            alt="Thumbnail 1"
            onClick={() => handleImageChange("./upload/x1.webp")}
          />
          <img
            src="./upload/x2.webp"
            alt="Thumbnail 2"
            onClick={() => handleImageChange("./upload/x2.webp")}
          />
          <img
            src="./upload/x4.webp"
            alt="Thumbnail 4"
            onClick={() => handleImageChange("./upload/x4.webp")}
          />
        </div>
        <img
          src={mainImage}
          alt="Citizen Axiom"
          className="product-image"
        />
      </div>
      <div className="product-details-section">
        <h1 className="subheading">CITIZEN</h1>
        <h2 className="brand">AXIOM</h2>
        <p className="model">Model AT2240-51E</p>
        <hr/>
        <p><strong>MOVEMENT : </strong> <span className="op"> Eco-Drive H504</span></p>
        <p><strong>CASE SIZE : </strong> <span className="op">43mm</span> </p>
        <p><strong>MATERIAL : </strong> <span className="op">Silver-tone Stainless Steel</span> </p>
        <hr/>
        <div className="price-list">
            <h3 className="disPrice">$350</h3>
            <h5 className="price">$400</h5>
        </div>
        <button className="offer-button">ADD TO CART</button>
      </div>
    </div>
  );
};

export default SpecialOfferCard;
