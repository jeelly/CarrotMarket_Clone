import React from "react";
//router
import { Routes, Route } from 'react-router-dom';
//Sub
import Main from'./Main'
import Login from'./Login'
import SignUp from'./SignUp'
import Detail from'./Detail'
import ListItem from'./ListItem'
import Post from'./Post'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/listItem" element={<ListItem />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
};

export default Router;
