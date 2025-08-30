import {createRoot} from "react-dom/client";
import "./assets/css/styles.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
    //authentication 
    const [userInfo, setUserInfo] = useState()
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Umesh Pal"
        }
        setUserInfo(data.name)
    }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
                    <div className="app">
                        <Header />
                        <Outlet />
                    </div>
            </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:restId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
],
{
    future: {
      v7_relativeSplatPath: true,
    },
});

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);