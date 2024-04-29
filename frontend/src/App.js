import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserTable from "./pages/userTable";
import SimpleInterest from "./pages/simpleInterest";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<UserTable />} />
          <Route  path="/task2" element={<SimpleInterest/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
