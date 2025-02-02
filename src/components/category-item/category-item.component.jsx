import { useNavigate } from 'react-router-dom';
import './category-item.styles.jsx';
import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from './category-item.styles.jsx';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
