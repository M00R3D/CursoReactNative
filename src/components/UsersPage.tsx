import { useUsers } from './useUsers';
import type { User } from '../interfaces';
////         :V
export const UsersPage = () => {
  const { users, nextPage, prevPage } = useUsers();

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
      <div>
        <button onClick={prevPage}>Atras</button>
        <button onClick={nextPage}>Adelante</button>
      </div>
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
