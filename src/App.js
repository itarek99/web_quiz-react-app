import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Blog from './components/Blog/Blog';
import Notfound from './components/NotFound/Notfound';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>,
        },
        {
          path: 'statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>,
        },
        { path: 'blog', element: <Blog></Blog> },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => {
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element: <Quiz></Quiz>,
        },
        { path: '*', element: <Notfound></Notfound> },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
