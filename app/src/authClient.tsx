import { 
    AUTH_CHECK, AUTH_LOGOUT, AUTH_LOGIN, AUTH_ERROR,
    AuthClientParams, AuthClientLoginParams, AuthClientErrorParams,
} from 'admin-on-rest';

const createAuthClient = (base: string) => (type: string, params: AuthClientParams) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params as AuthClientLoginParams;
        const request = new Request(base + '/rpc/login', {
            method: 'POST',
            body: JSON.stringify({ 
                email: username, password 
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.pgrst.object+json'
            })
        });

        return fetch(request)
            .then(response => {
                if (response.status === 403) {
                    return response.json()
                        .then(error => {
                            const { message } = error;
                            throw new Error(message);
                        });
                }

                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    }

    if (type === AUTH_ERROR) {
        const { status } = params as AuthClientErrorParams;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject(undefined);
        }
        return Promise.resolve();
    }

    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }

    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') 
            ? Promise.resolve() 
            : Promise.reject(undefined);
    }

    return Promise.resolve();
};

export default createAuthClient;
