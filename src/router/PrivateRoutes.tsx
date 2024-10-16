import { Route, Routes } from 'react-router-dom';
import ProtectRoute from '~/components/ProtectRoute';
import PrivatePageEx from '~/pages/PrivatePageEx';

function PrivateRoutes() {
    return (
        <Routes>
            {/* change path */}
            <Route path="/private" element={<ProtectRoute roles={['admin']} />}>
                <Route index element={<PrivatePageEx />} />
            </Route>
            {/* Private routes go here */}
        </Routes>
    );
}

export default PrivateRoutes;
