import { useContext } from 'react'
import { DataContext } from '../../Context/dataContext';

function CategoryPage() {
    let store = useContext(DataContext);
  store.route.setData('categories')
  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage