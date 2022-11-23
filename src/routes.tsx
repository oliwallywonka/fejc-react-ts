import { RouteObject } from 'react-router-dom';
import App from './App.jsx';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App/>,
    errorElement: <span> 404 </span>,
    children: [
      {
        path: '/',
        element: <span> Home! </span>
      },
      {
        path: 'paintings/:paintingId',
        element: <span> Painting placeholder!</span>
      }
    ]
  }
];

export default routes;
