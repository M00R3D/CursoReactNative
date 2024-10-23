import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import type { ReqResUserListResponse, User } from '../interfaces';

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

export const useUsers = () => {
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

  return { users, nextPage, prevPage };
};
