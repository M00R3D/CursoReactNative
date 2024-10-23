import React, { useEffect ,useRef,useState} from 'react'

import axios from 'axios';
import type{ ReqResUserListResponse, User } from '../interfaces';

const loadUsers = async (page: number): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
      params: {
        page: page
      }
    });
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  const fetchUsers = async () => {
    const newUsers = await loadUsers(currentPageRef.current);
    setUsers(newUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    fetchUsers();
  };

  const prevPage = async () => {
    if (currentPageRef.current > 1) {
      currentPageRef.current--;
      fetchUsers();
    }
  };

    return (
      <>
        <h1>UsersPage</h1>
        <table>
          <thead>
            <tr>
              | <th>Avatar</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
          <div>
            <button onClick={prevPage}>atras</button>
            <button onClick={nextPage}>adelante</button>
          </div>
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
  