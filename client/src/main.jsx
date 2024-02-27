import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'

import App from './App.jsx';
import { Home } from './pages/Home.jsx';
import { Esports } from './components/Esports.jsx';
import { Content } from './components/Content.jsx';
import { Apparel } from './components/Apparel.jsx';
import Error from './views/pages/Error.jsx';

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