import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



// const image=["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/e2d2a661-8730-4b74-9842-71b9e0869c86_807783.jpg",
//     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_107452.JPG",
//     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f996b31033fd07603bfb28cb4e526683",
//     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8"]





const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
         </div>
    )
}
//This configuration tell browser what will happen on a specific path

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>

            },
            {
                path:"/about",
                element: <About/>
            },  
            {
                path:"/contact",
                element:<Contact/>
            },{
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ]
    },
   
])

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)