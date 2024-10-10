import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
import BlogEditor from "../../Components/EditBlock";

function NewsPage() {
  const store = useContext(DataContext);
  store.route.setData("news");
  return (
    <div style={{width:'100%'}}>
      <BlogEditor />
    </div> 
  );
}

export default NewsPage;
