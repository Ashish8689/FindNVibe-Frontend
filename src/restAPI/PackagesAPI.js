import axios from 'axios';

const axiosAuth = axios.create()
// const BASE_URL = `${process.env.REACT_APP_API_URL}/packages`;
const BASE_URL = `http://localhost:8000/packages`;

//we intercept every requests 
axiosAuth.interceptors.request.use((req) =>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
}, error => {
    return Promise.reject(error)
})


export const getPackages = async () => {
    const response = await axiosAuth.get(BASE_URL);
    return response.data.data;
};

export const addPackages = async (data) => {
    const response = await axiosAuth.post(BASE_URL, data);
    return response.data;
};

export const updatePackages = async (id,data) => {
    const response = await axiosAuth.put(`${BASE_URL}/${id}`,data);
    return response.data;
};

export const updatePackagesOffer = async (id,data) => {
    const response = await axiosAuth.put(`${BASE_URL}/updateStatus/${id}`,data);
    return response.data;
};

export const deletePackages = async (id) => {
    const response = await axiosAuth.delete(`${BASE_URL}/${id}`);
    return response.data;
};
