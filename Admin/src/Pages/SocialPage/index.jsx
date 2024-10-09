import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";

function SocialPage() {
  const store = useContext(DataContext);
  store.route.setData("social");
  return <div>Social</div>;
}

export default SocialPage;
