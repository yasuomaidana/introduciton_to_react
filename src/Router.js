import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate
  } from "react-router-dom";

import App from './App';
import { Color } from './Color';
import FetchData from './fetch_data_component/FetchData';
import Blog from './blog/Blog';
import Home from "./blog/Home"
import Post from "./blog/post/Post"
import PostPage from "./blog/post/PostPage"

const browserRouter = createBrowserRouter(createRoutesFromElements(

        <Route>
            <Route path="/" element={<App />}/>
            <Route path="color">
              <Route path="" element={<Color/>}></Route>
              <Route path="whatever" element={<Blog/>}/>
            </Route>
            <Route path="/fetch" element={<FetchData />}/>
            <Route path="/blog">
              <Route path="" element={<Home/>}/>
              <Route path="post">
                <Route path="" element={<Post/>}/>
                <Route path=":id" element={<PostPage/>}/>
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="" replace />} />
        </Route>
));

export default browserRouter;
