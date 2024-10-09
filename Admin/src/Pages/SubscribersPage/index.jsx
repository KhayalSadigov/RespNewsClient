import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";

function SubscribersPage() {
  const store = useContext(DataContext)
  store.route.setData("subscribers");
  return (
    <div>Subscribers</div>
  )
}

export default SubscribersPage