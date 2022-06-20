import React, { useEffect } from "react";
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
//Redux
import { useDispatch } from "react-redux";
import { loadContentDB } from "../redux/modules/contentSlice";
import ContentList from "../components/content/ContentList";

const Router = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContentDB(0));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login"  element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/content" element={<Content />} />
      <Route path="/content/:id" element={<Content />} />
      <Route path="/post" element={<Post />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
