import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import Transactions from "./pages/Transactions/Transactions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/transactions", element: <Transactions /> },
    { path: "/support", element: <Support /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
