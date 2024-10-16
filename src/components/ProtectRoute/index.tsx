import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '~/constants';

interface ProtectRouteProps {
    roles?: string[];
}

function ProtectRoute({ roles }: ProtectRouteProps) {
    // change isLogged and userRoles with your auth logic
    const isLogged = true;
    const userRoles = 'admin';
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    const redirectUrl = `${ROUTES.LOGIN}?redirect=${pathname}`;

    useEffect(() => {
        if (!isLogged) {
            navigate(redirectUrl);
        }

        if (roles && !roles.some((r) => r === userRoles)) {
            navigate(redirectUrl);
        }
    }, [isLogged, location, navigate, redirectUrl, roles, userRoles]);

    return (
        <>
            <Outlet />
        </>
    );
}

export default ProtectRoute;
