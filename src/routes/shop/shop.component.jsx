import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";

const Shop = () => {
  return (
    <div>
        <Routes>
          <Route index element={<CategoriesPreview />} />
          <Route path=":category" element={<Category />} />
        </Routes>
    </div>
  );
};

export default Shop;
