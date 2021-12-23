import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { PostItem } from "./pages/Posts/PostItem";
import { Posts } from "./pages/Posts/Posts";
import { Account } from "./pages/Account/Account";
import "./App.module.css";
import { Home } from "./pages/Home/Home";

export const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="account" element={<Account />} />
          <Route path="posts/:index" element={<PostItem />} />
        </Route>
      </Routes>
    </>
  );
};
