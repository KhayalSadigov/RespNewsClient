import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";

function AboutPage() {
  let store = useContext(DataContext);
  store.route.setData('about')
  return (
    <div>AboutPage</div>
  )
}

export default AboutPage