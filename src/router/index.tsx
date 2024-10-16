import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

function Router() {
    return (
        <BrowserRouter>
            <PublicRoutes />
            <PrivateRoutes />
        </BrowserRouter>
    );
}

export default Router;
