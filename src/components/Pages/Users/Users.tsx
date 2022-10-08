import React from 'react';

import { useAppSelector } from '../../../hooks/useStore';
import { getUsers } from '../../../store/slice/fetchUsers';
import { UserItem } from './UserItem';
import styles from './Users.module.scss';

type Props = {}

const Users = (props: Props) => {
  const users = useAppSelector(getUsers)

  return (
    <div
      className={styles.usersWrapper}
    >
      <div
        className={styles.usersItemWrapper}
      >
        {users.map(item => <UserItem key={item.id} data={item} />)}
      </div>
    </div>
  )
}

export default Users