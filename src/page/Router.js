import React, { useEffect, useState } from "react";
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
import { loadContentDB, loadTopContentDB } from "../redux/modules/contentSlice";
import ContentList from "../components/content/ContentList";
import ContentTopList from "../components/content/ContentTopList";
import ContentItem from "../components/content/ContentItem";

const Router = () => {
  const dispatch = useDispatch();
  const [isloaded, setIsloaded] = useState(false);

  useEffect (() => {
    dispatch(loadContentDB(0));
    dispatch(loadTopContentDB(0));
    setIsloaded(true);
  }, []);

  return (
    <Routes>
      <Route path="/" element={isloaded && <Main />} />
      <Route path="/login"  element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/detail" element={isloaded && <Detail />} />
      <Route path="/detail/:id" element={isloaded && <Detail />} />
      <Route path="/content" element={isloaded && <Content />} />
      <Route path="/content/:id" element={isloaded && <Content />} />
      <Route path="/post" element={isloaded && <Post />} />
      <Route path="/post/:id" element={isloaded && <Post />} />
      <Route path="*" element={<PageNotFound />} />
      {/* 임시삭제예정 */}
      <Route path="/contenttop" element={<ContentTopList />} />
    </Routes>
  );
};

export default Router;
