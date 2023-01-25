// configure axios instance


import axios from 'axios';

export const $api = axios.create({
    baseURL: 'http://localhost:5100',
    headers: {}

});



// export axios instance as $axios
