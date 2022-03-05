import { RouteObject, Navigate } from 'react-router-dom'
import AppLayout from '../view/layout/AppLayout';
import {lazy, ReactNode, Suspense} from "react";


const Home = lazy(() => import('../view/page/Home'));
const Contact = lazy(() => import('../view/page/Contact'));
const Research = lazy(()=> import('../view/page/Research'));
const Publication = lazy(()=> import('../view/page/Publication'));

const lazyLoad = (children: ReactNode): ReactNode =>{
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {children}
    </Suspense>
  )
}

export const routers: RouteObject[] = [

  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />
      },
      {
        path: '/home',
        element: lazyLoad(<Home/>)
      },
      {
        path: '/contact',
        element: lazyLoad(<Contact/>)
      },
      {
        path: '/research/:id',
        element: lazyLoad(<Research/>)
      },
      {
        path: '/publication/:id',
        element: lazyLoad(<Publication/>)
      },
    ]
  }

]