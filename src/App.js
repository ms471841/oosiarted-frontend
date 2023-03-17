import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// projects imports
import Header from "./components/appbar";
import CreatePost from "./components/createpost";
import DashBoard from "./views";
import Layout from "./views/layout";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashBoard />} />
            <Route path="/admin" element={<CreatePost />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
