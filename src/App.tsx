import "./App.css";
import Header from "./components/Header/Header.tsx";
import EmptyResult from "./components/EmptyResult/EmptyResult.tsx";
import searchIcon from "../src/assets/search.svg";
import {useEffect, useState} from "react";
import services from "./services";
import User from "./components/User/User.tsx";
import {UserTypes} from "./components/User/type.ts";

function App() {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<UserTypes | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear previous timeout
    }

    const newTimeoutId = setTimeout(() => {
      services.fetchData.getUser(search)
      .then((res) => setData(res))
      .catch(() => setData(null));
    }, 1000); // 1-second delay

    setTimeoutId(newTimeoutId);

    // Cleanup function to clear timeout on component unmount or search change
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [search]);

  return (
  <>
    <Header setData={setSearch}/>
    {data
    ? <User data={data}/>
    : <EmptyResult icon={searchIcon} text={"Start with searching a GitHub user"}/>}
  </>
  );
}

export default App;
