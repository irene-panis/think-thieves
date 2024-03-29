import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'

import App from './App.jsx';
import { Home } from './pages/Home.jsx';
import { Esports } from './pages/Esports.jsx';
import { Content } from './pages/Content.jsx';
import { Apparel } from './pages/Apparel.jsx';
import { Error } from './pages/Error.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/esports',
        element: <Esports />,
      },
      {
        path: '/content',
        element: <Content />,
      },
      {
        path: '/apparel',
        element: <Apparel />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);