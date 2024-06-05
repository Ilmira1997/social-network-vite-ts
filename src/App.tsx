import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

   const App = () => {
    const router = createBrowserRouter([
      {
        path:"/",
        element:<LoginPage/>
      },
      {
        path:"/main-page",
        element:<MainPage/>
      },
      {
        path:"/profile-page",
        element:<ProfilePage/>
      },
    ])
    
    return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
    );
  };

  export default App;
