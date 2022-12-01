import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MessingerPage from "./components/Pages/Messenger/MessingerPage";

const Container = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="container">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/lentcontent"
          element={<Content searchValue={searchValue} />}
        />
        <Route path="/messinger" element={<MessingerPage />} />
      </Routes>
    </div>
  );
};

export default Container;
