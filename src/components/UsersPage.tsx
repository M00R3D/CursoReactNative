import React, { useEffect } from 'react'
import axios from 'axios';
import { ReqResUserListResponse } from '../interfaces';

export const UsersPage = () => {

    useEffect(()=>{
        axios.get<ReqResUserListResponse>('https://reqres.in/api/users?page=2') 
            .then(resp=>console.log(resp.data.data[0]));
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
