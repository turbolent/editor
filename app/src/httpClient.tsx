import { fetchUtils } from 'admin-on-rest';

const httpClient = (url: string, options: {headers?: Headers} = {}) => {
    if (!options.headers) {
        options.headers = new Headers({
            'Accept': 'application/json'
        });
    }

    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

export default httpClient;
