import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";

import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../product-card/product-card.component';

import {CategoryContainer, CategoryTitle}  from'./category.styles';

const Category = () =>{
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setproducts] = useState([]);

    useEffect(()=>{
        setproducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
      <Fragment>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
        </CategoryContainer>
      </Fragment>
    );

}

export default Category;