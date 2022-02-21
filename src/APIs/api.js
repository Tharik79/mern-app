import axios from 'axios';

const usersUrl = "http://localhost:9000/users";

export const getUsers = async(id) => {

    id = id || "";     //to check if id available for edit operation of no id to print simply get all users list.
    
    return await axios.get(`${usersUrl}`);
}
// modified the getUsers by inserting id as props in the function in order to get Users list for edit operation.
//export default getUsers;

export const addUser = async(user) => {

    return await axios.post(`${usersUrl}/add`, user);
}
///export default adduser;

export const editUser = async(id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user);
}
// above editUser function is to update the edited user details into database.

export const deleteUser = async(id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}