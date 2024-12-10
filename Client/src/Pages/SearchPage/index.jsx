import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Base_Url from "../../Constant/base_url";

function SearchPage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  let { language, type, query } = useParams();
  console.log(type)
  console.log(type);
  useEffect(() => {
    if (type == "category") {
      axios
        .get(
          Base_Url +
            `/api/news/language/${parseInt(language) + 1}/${query}/${page}`
        )
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        });
    }
    if (type == "date") {
      axios
        .get(Base_Url + `/api/SelectDate/${query}/${language+1}`)
        .then((res) => {
          setData(res.data);
          console.log(Base_Url + `/api/SelectDate/${query}/${language+1}`)
          console.log(res.data);
        });
    }
  }, []);
  return <div>Search</div>;
}

export default SearchPage;
