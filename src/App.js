import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LogIn from './components/AccountsDB/LogIn/LogIn';
import Register from './components/AccountsDB/Register/Register';
import Main from './components/layout/Main';
import Blog from './components/Pages/Blog/Blog';
import Courses from './components/Pages/Courses/Courses';
import Faq from './components/Pages/Faq/Faq';
import Home from './components/Pages/Home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
      ]

    }
  ])

  return (
    <div variant="">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
