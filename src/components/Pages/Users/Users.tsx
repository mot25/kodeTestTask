import React, { ReactNode, useEffect, useMemo, useState } from 'react';

import { useAppSelector } from '../../../hooks/useStore';
import { UsersItemsType } from '../../../Services/UserServices';
import { getFilterDepartament, getSearch, getSortMode } from '../../../store/slice/appStorage';
import { getUsers } from '../../../store/slice/fetchUsers';
import { comapreMonth, getCurrentDay } from '../../../Utilts/helper';
import { TextInserLine } from '../../Simple/TextInserLine';
import { UserItem } from './path/UserItem';
import styles from './Users.module.scss';

type Props = {}
const getMsFromMonth = (date: string) => {
  return new Date(date).getTime()
}

const Users = (props: Props) => {
  // Получения всех пользователей
  const users = useAppSelector(getUsers)
  // Значения из табов
  const departamnet = useAppSelector(getFilterDepartament)
  // Значения из модального окна 
  const sortMode = useAppSelector(getSortMode)
  // Значения из инпута 
  const search = useAppSelector(getSearch)

  const [stateUsers, setStateUsers] = useState<UsersItemsType[]>([])
  const [currentBirthdayUsers, setCurrentBirthdayUsers] = useState<UsersItemsType[]>([])
  const [nextBirthdayUsers, setNextBirthdayUsers] = useState<UsersItemsType[]>([])
  const [alphabetSortUsers, setAlphabetSortUsers] = useState<UsersItemsType[]>([])
  const sortUsers = () => {
    const currentYear: UsersItemsType[] = []
    const nextYear: UsersItemsType[] = []
    for (let i = 0; i < users.length; i++) {
      const item = users[i]
      if (new Date(getCurrentDay()).getTime() > new Date(comapreMonth(item.birthday)).getTime()) {
        currentYear.push(item)
      } else {
        nextYear.push(item)
      }
    }
    setCurrentBirthdayUsers(currentYear.sort((a: UsersItemsType, b: UsersItemsType) => new Date(comapreMonth(a.birthday)).getTime() - new Date(comapreMonth(b.birthday)).getTime()))
    setNextBirthdayUsers(nextYear.sort((a: UsersItemsType, b: UsersItemsType) => new Date(comapreMonth(a.birthday)).getTime() - new Date(comapreMonth(b.birthday)).getTime()))



  }
  let results = [];

  let toSearch = "lo";

  for (let i = 0; i < usersDemo.length; i++) {
    for (key in usersDemo[i]) {
      if (usersDemo[i][key].indexOf(toSearch) != -1) {
        results.push(usersDemo[i]);
      }
    }
  }
  useEffect(() => {
    // modeUsers
    sortUsers()
  }, [users.length])
  return (
    <div
      className={styles.usersWrapper}
    >
      <div
        className={styles.usersItemWrapper}
      >
        {/* {stateUsers.map(item => <UserItem key={item.id} data={item} />)} */}
        <div>

          {nextBirthdayUsers.map(item => <UserItem key={item.id} data={item} />)}
          <TextInserLine
            text={new Date().getFullYear() + 1}
          />
          {currentBirthdayUsers.map(item => <UserItem key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  )
}
export default Users

const usersDemo = [{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba35gs76f08",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "Joseph",
  "lastName": "Martinez",
  "userTag": "jm",
  "department": "pr",
  "position": "writer",
  "birthday": "2003-10-01",
  "phone": "+79001234519"
},
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6re3",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "Dan",
  "lastName": "Miller",
  "userTag": "dm",
  "department": "frontend",
  "position": "developer",
  "birthday": "1990-11-21",
  "phone": "+79001234517"
},
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbbae6re3",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "Dan",
  "lastName": "Miller",
  "userTag": "dm",
  "department": "frontend",
  "position": "developer",
  "birthday": "1990-12-31",
  "phone": "+79001234517"
},
{
  "id": "497f6eca-6276-499f3-bfeb-53cbbbba6re3",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "Dan",
  "lastName": "Miller",
  "userTag": "dm",
  "department": "frontend",
  "position": "developer",
  "birthday": "1990-01-01",
  "phone": "+79001234517"
},
{
  "id": "497f6eca-6276-4993-bfeb-53qweca",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "John",
  "lastName": "Doe",
  "userTag": "jd",
  "department": "android",
  "position": "developer",
  "birthday": "1973-01-24",
  "phone": "+79001234567"
},
{
  "id": "497f6eca-6276-4993-4bfeb-53qweca",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "John",
  "lastName": "Doe",
  "userTag": "jd",
  "department": "android",
  "position": "developer",
  "birthday": "1973-10-24",
  "phone": "+79001234567"
},
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbbssaga6f08",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "Richard",
  "lastName": "Davis",
  "userTag": "string",
  "department": "hr",
  "position": "Team Lead",
  "birthday": "2003-01-24",
  "phone": "+79001234518"
}, {
  "id": "497f6eca-6276-4993-bfeb-53gasfaf08",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "Mike",
  "lastName": "Smith",
  "userTag": "ms",
  "department": "ios",
  "position": "IOS developer",
  "birthday": "1992-04-14",
  "phone": "+79001234512"
}, {
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "Michael",
  "lastName": "Scott",
  "userTag": "ms",
  "department": "qa",
  "position": "Team Lead",
  "birthday": "1983-05-05",
  "phone": "+79001234515"
}, {
  "id": "497f6eca-6276-4993-bfeb-53cvfhAs",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "Boby",
  "lastName": "Jones",
  "userTag": "bj",
  "department": "management",
  "position": "project manager",
  "birthday": "1993-08-24",
  "phone": "+79001234514"
}, {
  "id": "497f6eca-6276-4993-bfeb-fjxffgsy4",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "Thomas",
  "lastName": "Lopez",
  "userTag": "Tech Lead",
  "department": "backend",
  "position": "string",
  "birthday": "2019-08-24",
  "phone": "+79001234520"
}, {
  "id": "497f6eca-6276-4993-bfeb-sdg6qdgyj",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "Charles",
  "lastName": "Thomas",
  "userTag": "string",
  "department": "support",
  "position": "support manager",
  "birthday": "2019-08-24",
  "phone": "+79001234521"
}, {
  "id": "497f6eca-6276-4993-bfeb-dddw4yuk3",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "Christopher",
  "lastName": "Taylor",
  "userTag": "ct",
  "department": "analytics",
  "position": "Team Lead",
  "birthday": "2019-08-24",
  "phone": "+79001234522"
}, {
  "id": "497f6eca-6276-4993-bfeb-53cbbbb6fhd",
  "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
  "firstName": "Jany",
  "lastName": "Brown",
  "userTag": "jb",
  "department": "design",
  "position": "developer",
  "birthday": "2001-03-01",
  "phone": "+79001234513"
}]

