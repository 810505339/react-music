import {lazy} from 'react'


const routes = [
    {
        path: "/home",
        component: lazy(() => import('@views/home'))
    },
    {
        path: '/rank',
        component: lazy(() => import('@views/rank'))
    },
    {
        path: "/playlist",
        component: lazy(() => import('@views/playlist'))
    },
    {
        path: "/singer",
        component: lazy(() => import('@views/singer'))
    },
    {
        path: "/video",
        component: lazy(() => import('@views/video'))
    },
    {
        path: "/mv",
        component: lazy(() => import('@views/mv'))
    },
    {
        redirect: '/home'
    }


];

export default routes