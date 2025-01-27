import { Outlet } from 'react-router-dom';
import CategoriesList from '../../components/categories-list/categories-list.component';

const Home = () => {
  return (
    <div>
      <CategoriesList />
      <Outlet />
    </div>
  );
};

export default Home;
