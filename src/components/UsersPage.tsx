import React, { useEffect ,useState} from 'react'

import axios from 'axios';
import type{ ReqResUserListResponse, User } from '../interfaces';

const loadUsers = async () => {
    try {
      const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users');
      return data.data; 
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
  
    useEffect(() => {
      loadUsers().then((users) => setUsers(users));
    }, []);
  
    return (
      <>
        <h1>UsersPage</h1>
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </>
    );
  };
  
  interface Props {
    user: User;
  }
  
  export const UserRow = ({ user }: Props) => {
    const { avatar, first_name, last_name, email } = user;
  
    return (
      <tr>
        <td>
          <img style={{ width: '50px' }} src={avatar} alt={`${first_name}'s avatar`} />
        </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    );
  };
  