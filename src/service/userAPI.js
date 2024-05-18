import axios from "axios";

const userUrl='http://localhost:8090/api/users';

export const addUser=async(user)=>{
    try{
        return await axios.post(`${userUrl}/register`,user)
    }catch(error)
    {
        console.log('Error while calling adduser Api ',error.message);
    }

}

export const login = async(email,password)=>{
    const data = {
        email: email,
        password: password
      };
    try{
        const response= await axios.post(`${userUrl}/login`,data);
        return response.data;
    }
    catch(error){
        console.log('error while logging in',error.message)
    }
}
export const getUsers=async()=>{
    
    try{
        return await axios.get(`${userUrl}/users`);
    }catch(error){
        console.log('Error while calling getUsers api',error.message);
    }
}

export const getTotalAgents = async(role) =>{
    try{
        const response = await axios.get(`${userUrl}/role/${role}`);
        return response.data.length;
    }
    catch(error){
        console.log('error while calling getTotalAgents api',error.message);
    }
}

export const getAllAgents = async(role) =>{
    try{
        const response = await axios.get(`${userUrl}/role/${role}`);
        return response.data;
    }
    catch(error){
        console.log('error while calling getTotalAgents api',error.message);
    }
}
 export const getUser=async(id)=>{
        id=id || '';
        try{
            return await axios.get(`${userUrl}/users/${id}`);
        }catch(error){
            console.log('Error while calling getUsers api',error.message);
        }
    }
export const getTotalUsers=async()=>{
    try{
        const response = await axios.get(`${userUrl}`);
        console.log(response);
    return response.data.length;
    }catch(error){
        console.log('Error while calling getUsers api',error.message);
    }
}
export const editUser=async(user,id)=>{
    try{
    return await axios.put(`${userUrl}/user` ,user)
    }catch(error){
        console.log("error while calling update api",error.message);

    }
}


export const deleteUser=async(id)=>{
    try{
        return await axios.delete(`${userUrl}/user/${id}`);
    }catch(error){
        console.log("error while calling delete api",error.message);

    }
}