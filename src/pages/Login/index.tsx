import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from '~/constants';

function loginPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Login Success');
        }, 3000);
    });
}

function Login() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const redirect = searchParams.get('redirect');

    const handleLogin = async () => {
        try {
            const res = loginPromise();
            console.log('response login', res);
            // login login success
            if (redirect) {
                navigate(redirect);
            } else {
                navigate(ROUTES.HOME);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main>
            <h1>This is the Login Page</h1>
            <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Login
            </button>
        </main>
    );
}

export default Login;
