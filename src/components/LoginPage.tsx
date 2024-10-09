import React, { useEffect } from 'react';
import { useAuthStore } from '../store/auth.store';

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, [logout]);

  if (authStatus === 'checking') {
    return <h3>Loading ...</h3>;
  }

  return (
    <>
      <h3>LoginPage</h3>

      {
        (authStatus === 'authenticated')
        ? (
          // <div>Autenticado como: {JSON.stringify(user, null, 2)}</div>
          <button onClick={logout}>Logout</button>
        ) 
        
        : (
          <button onClick={()=>login('John Doe','ABC12')}>
            Login
          </button>
        )
      }
    </>
  );
};
