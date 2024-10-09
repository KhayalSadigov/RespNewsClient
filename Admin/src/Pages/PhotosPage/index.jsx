import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";

function PhotosPage() {
  const store = useContext(DataContext)
  store.route.setData("photos");
  return (
    <div>Photos</div>
  )
}

export default PhotosPage