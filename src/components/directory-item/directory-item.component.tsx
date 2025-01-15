import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { DirectoryCategory } from "../directory/directory.component";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.style";


type DirectoryProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryProps> = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();

  const navigationHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={navigationHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
