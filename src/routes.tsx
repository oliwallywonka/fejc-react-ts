import { Outlet, RouteObject } from 'react-router-dom';
import PhoneScreen from './components/PhoneScreen';
import Home from './pages/Home';
import PaintingDetails from './pages/PaintingDetails';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PhoneScreen><Outlet/></PhoneScreen>,
    errorElement: <span>404</span>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'paintings/:paintingId',
        element: <PaintingDetails/>
      }
    ]
  }
];

export default routes;
