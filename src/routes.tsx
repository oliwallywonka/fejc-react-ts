import { RouteObject } from 'react-router-dom';
import PhoneScreen from './components/PhoneScreen';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PhoneScreen/>,
    errorElement: <span>404</span>,
    children: [
      {
        path: '/',
        element: <span>Home!</span>
      },
      {
        path: 'paintings/:paintingId',
        element: <span>Painting placeholder!</span>
      }
    ]
  }
];

export default routes;
