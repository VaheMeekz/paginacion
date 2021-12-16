import Login from "../Components/HeaderComponents/Login/login";
import Registration from "../Components/HeaderComponents/Registration/registration";
import Home from "../Components/HeaderComponents/Home/home";
import Products from "../Components/HeaderComponents/Products/products";
import Docs from "../Components/HeaderComponents/Docs/docs";
import Post from "../Components/HeaderComponents/Post/post";
import {POST_PAGE, DOCS_PAGE, HOME_PAGE, LOGIN_PAGE, PRODUCTS_PAGE, REGISTRATION_PAGE} from "../URL/url";

export const isAuthRoutes = [
    {
        id: Math.random(),
        path: LOGIN_PAGE,
        Component: Login,
        name: "Login"
    },
    {
        id: Math.random(),
        path: REGISTRATION_PAGE,
        Component: Registration,
        name: "Registration"
    },
    {
        id: Math.random(),
        path: HOME_PAGE,
        Component: Home,
        name: "Home"
    },
    {
        id: Math.random(),
        path: PRODUCTS_PAGE,
        Component: Products,
        name: "Products"
    },
    {
        id: Math.random(),
        path: DOCS_PAGE,
        Component: Docs,
        name: "Docs"
    },
    {
        id: Math.random(),
        path: POST_PAGE,
        Component: Post,
        name: "Posts"
    }
]
