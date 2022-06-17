import React from "react";
//router
import { Routes, Route } from 'react-router-dom';
//Sub
import Main from'./Main'
import Login from'./Login'
import SignUp from'./SignUp'
import Detail from'./Detail'
import Content from'./Content'
import Post from'./Post'
import PageNotFound from'./PageNotFound'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/content" element={<Content />} />
      <Route path="/post" element={<Post />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
