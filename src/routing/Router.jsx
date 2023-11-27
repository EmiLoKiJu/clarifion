import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@/components/Home';
import ErrorPage from '@/components/ErrorPage';
import Clarifion from '@/components/Clarifion';

export default function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: < Clarifion/>,
          children: []
        },
      ]},
  ]);

  return (
    <RouterProvider router={routes}/>
  );
}
