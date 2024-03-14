import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom';
import Home from './pages/home.jsx';
import DetailMovie from './pages/detail-movie.jsx';
import detailMoviesLoader from './components/loader/detailMoviesLoader.jsx';
import Index from './pages/index.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index={true} path='/' element={<Index />} />
            <Route path='/movies' element={<Home />} />
            <Route
                path='/movies/:id'
                element={<DetailMovie />}
                loader={detailMoviesLoader}
            />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
