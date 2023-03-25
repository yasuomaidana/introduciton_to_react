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

const browserRouter = createBrowserRouter(createRoutesFromElements(

        <Route path="/" element={<App />}>
            <Route path="/color" element={<Color />}/>
            <Route path="/fetch" element={<FetchData />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="*" element={<Navigate to="" replace />} />
        </Route>
));

export default browserRouter;
