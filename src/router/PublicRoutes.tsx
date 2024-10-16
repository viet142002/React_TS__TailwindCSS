import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '~/constants';
import DefaultLayout from '~/layouts/DefaultLayout';
import HomePage from '~/pages/Home';
import Login from '~/pages/Login';

function PublicRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />

                {/* Public routes with default layout */}
            </Route>

            <Route path={ROUTES.LOGIN} element={<Login />} />
            {/* Public routes go here */}
        </Routes>
    );
}

export default PublicRoutes;
