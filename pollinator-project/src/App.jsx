import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import PollinatorMapPage from "./pages/PollinatorMapPage";
import StateInfoPage from "./pages/StateInfoPage";
import CreditsPage from "./pages/CreditsPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "pollinatormap", element: <PollinatorMapPage /> },
      { path: "credits", element: <CreditsPage /> },
      { path: ":stateName", element: <StateInfoPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
