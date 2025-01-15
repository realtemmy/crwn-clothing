import { FC } from 'react';
import ProductCard from '../product-card/product-card.component';

import { CategoryPreviewContainer, Title, Preview } from './category-preview.style';

type ProductProps = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
};

type CategoryProps = {
  title: string,
  products: ProductProps[]
}

const CategoryPreview: FC<CategoryProps> = ({title, products}) => {
    return (
      <CategoryPreviewContainer>
        <h2>
          <Title to={title}>{title.toUpperCase()}</Title>
        </h2>
        <Preview>
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
        </Preview>
      </CategoryPreviewContainer>
    );
}

export default CategoryPreview