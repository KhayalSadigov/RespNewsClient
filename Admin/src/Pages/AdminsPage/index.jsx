import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";

function AdminsPage() {
  const store = useContext(DataContext)
  store.route.setData("admins");
  return (
    <div>Admins</div>
  )
}

export default AdminsPage