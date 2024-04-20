import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./layouts/Main.layout/MainLayout.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.tsx";
import DetailPage from "./pages/DetailPage/DetailPage.tsx";
import axios from "axios";
import Preloader from "./components/Preloader/Preloader.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const rourer = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Preloader />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: "/detail/:nickname",
        element: (
          <Suspense fallback={<Preloader />}>
            <DetailPage />
          </Suspense>
        ),
        loader: async ({ params }) => {
          const { data } = await axios.get(
            `https://api.github.com/users/${params.nickname}`
          );
          return data;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={rourer} />
    </Provider>
  </React.StrictMode>
);
