import axios from 'axios';

const CategoryAPI = {
    async getAllCategory(){
        return axios.get(`/category`).then(data=> data).catch(err =>err)
    }
}

export default CategoryAPI