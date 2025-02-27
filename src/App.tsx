import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy load các trang
const HomePage = lazy(() => import("./pages/Home-page/Home"));
const LoginPage = lazy(() => import("./pages/Authentication-page/UserAuth"));
const UserProfile = lazy(
  () => import("./pages/Authentication-page/UserProfile")
);
const ProductPage = lazy(() => import("./pages/Product-page/Product"));
const ForPassPage = lazy(
  () => import("./pages/Authentication-page/ForgetPassword")
);
const ChangePassPage = lazy(
  () => import("./pages/Authentication-page/ChangePassword")
);
const CartPage = lazy(() => import("./pages/Cart-page/Cart"));
const CheckoutPage = lazy(() => import("./pages/Checkout-page/Checkout"));
const ProductMenu = lazy(() => import("./pages/ProductMenu-page/ProductMenu"));
const ChatPage = lazy(() => import("./pages/Chat-page/Chat"));

// Khai báo router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/Product",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProductPage />
      </Suspense>
    ),
  },
  {
    path: "/ForgetPass",
    element: <ForPassPage />,
  },
  {
    path: "/ChangePass",
    element: <ChangePassPage />,
  },
  {
    path: "/Cart",
    element: <CartPage />,
  },
  {
    path: "/Checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/ProductMenu",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProductMenu />
      </Suspense>
    ),
  },
  {
    path: "/Chat",
    element: <ChatPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
