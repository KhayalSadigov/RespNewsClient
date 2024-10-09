import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";

function NewspapersPage() {
  const store = useContext(DataContext)
  store.route.setData("newspapers");
  return <div>Newspapers</div>;
}

export default NewspapersPage;
