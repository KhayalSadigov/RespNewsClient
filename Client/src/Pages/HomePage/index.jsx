import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
import CardSkeleton from "../../Components/Skeleton";

function HomePage() {
  let store = useContext(DataContext);
  store.route.setData("home");
  return (
    <main >
      <CardSkeleton />
    </main>
  );
}

export default HomePage;
