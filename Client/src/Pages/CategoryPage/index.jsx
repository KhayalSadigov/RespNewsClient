import { useContext } from 'react'
import { DataContext } from '../../Context/dataContext';
import CardSkeleton from '../../Components/Skeleton';

function CategoryPage() {
    let store = useContext(DataContext);
  store.route.setData('categories')
  return (
    <div>
      <CardSkeleton />
    </div>
  )
}

export default CategoryPage