import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
import CardSkeleton from "../../Components/Skeleton";

function HomePage() {
  let store = useContext(DataContext);
  store.route.setData("home");
  return (
    <section >
      <CardSkeleton />
    </section>
  );
}

export default HomePage;
