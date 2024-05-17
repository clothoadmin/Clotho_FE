import axios from "axios";

const productUrl='http://localhost:8090/api/products';

export const getTotalProducts = async() =>{
    try{
        const response = await axios.get(`${productUrl}`);
        return response.data.length;
    }
    catch(error){
        console.log('error while calling getTotalProducts api',error.message);
    }
}

