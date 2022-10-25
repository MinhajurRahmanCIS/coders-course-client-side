import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LogIn from './components/AccountsDB/LogIn/LogIn';
import Register from './components/AccountsDB/Register/Register';
import Main from './components/layout/Main';
import Blog from './components/Pages/Blog/Blog';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import CourseDetails from './components/Pages/CourseDetails/CourseDetails';
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
          loader: async () => fetch('http://localhost:5000/coders-courses'),
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
        {
          path: '/coursedetails/:coursedetailsId',
          loader: async({params}) => {
            return fetch(`http://localhost:5000/coders-courses/${params.coursedetailsId}`)
          },
          element: <CourseDetails></CourseDetails>
        },
        {
          path: '/checkOut',
          element: <CheckOut></CheckOut>
        }
      ]
    },
    {
      path: '*',
      element: <div className="container text-center"><h1 className="text-danger ">Error 404!!</h1> <p className="text-warning">Something Wrong happen!!!</p></div>
    }
  ])

  return (
    <div className="">
    
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
