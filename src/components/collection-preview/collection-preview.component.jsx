import React from "react";
import CollectionItem from "../collection-item/collection-item.component.jsx";

import "./collection-preview.styles.scss";

export const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4) //me na i shfaq vetem 4 elemente si preview
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
