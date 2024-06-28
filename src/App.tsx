import "./App.css";
import Header from "./components/Header/Header.tsx";
import EmptyResult from "./components/EmptyResult/EmptyResult.tsx";
import searchIcon from "../src/assets/search.svg";
import React, {useEffect, useState} from "react";
import services from "./services";
import User from "./components/User/User.tsx";
import {UserTypes, Repo, UsersTypes} from "./components/User/type.ts";

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<UsersTypes | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = window.setTimeout(() => {
      services.fetchData.getUser(search)
      .then((res: UserTypes) => {
        return services.fetchData.getUserRepository(search)
        .then((repos: Repo[]) => {
          setData({
            user: res,
            public_reports: repos
          });
        });
      })
      .catch(() => setData(null));
    }, 1000);

    setTimeoutId(newTimeoutId);

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
