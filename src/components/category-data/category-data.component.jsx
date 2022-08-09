import CategoryItem from "../category-item/category-item.component";

import "./category-data.styles.scss"


const CategoryData = ({categories}) =>{
    return (
      <div className="category-data-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    );
}

export default CategoryData;