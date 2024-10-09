import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";

function MessagePage() {
  const store = useContext(DataContext);
  store.route.setData("messages");
  return <div>MessagePage</div>;
}

export default MessagePage;
