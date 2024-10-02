import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";

function ContactPage() {
  let store = useContext(DataContext);
  store.route.setData('contact')
  return (
    <div>ContactPage</div>
  )
}

export default ContactPage