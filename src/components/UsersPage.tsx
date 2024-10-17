import React, { useEffect } from 'react'
import axios from 'axios';
import { ReqResUserListResponse } from '../interfaces';

const loadUsers =async()=>{
    try {
        const {data} =await axios.get<ReqResUserListResponse>('https://reqres.in/api/users');
        return data.data;
    } catch (error) {
        console.log(error)    
        return []
    }
}



export const UsersPage = () => {

    useEffect(()=>{
        // axios.get<ReqResUserListResponse>('https://reqres.in/api/users?page=2') 
        //     .then(resp=>console.log(resp.data.data[0]));
        loadUsers().then(users=>console.log(users));
    },[])
  return (
    <>
        <div>UsersPage</div>
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>avatar</td>
                    <td>nombre</td>
                    <td>email</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}
