import { Outlet, RouteObject } from 'react-router-dom';
import PhoneScreen from './components/PhoneScreen';
import HomeScreen from './components/Screens/HomeScreen';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PhoneScreen><Outlet/></PhoneScreen>,
    errorElement: <span>404</span>,
    children: [
      {
        path: '/',
        element: <HomeScreen></HomeScreen>
      },
      {
        path: 'paintings/:paintingId',
        element: <span>Painting placeholder!</span>
      }
    ]
  }
];

export default routes;
