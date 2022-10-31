import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { ReactComponent as Magnifier } from '../../../assets/icon/Magnifier.svg';
import { ReactComponent as Aliens } from '../../../assets/image/Aliens.svg';
import { Endpoints } from '../../../Constant/constant';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { useGeUsersQuery, UserServices, UsersItemsType } from '../../../Services/UserServices';
import {
  getFilterDepartament,
  getGlobalError,
  getLoading,
  getSearch,
  getSortMode,
  setGlobalError,
  setLoading,
} from '../../../store/slice/appStorage';
import { getUsers, setItems } from '../../../store/slice/fetchUsers';
import { comapreMonth, getCurrentDay } from '../../../Utilts/helper';
import { EmpetyValues } from '../../Simple/EmpetyValues';
import { TextInserLine } from '../../Simple/TextInserLine';
import { UserItem } from './parts/UserItem';
import styles from './Users.module.scss';

type Props = {}
const getMsFromMonth = (date: string) => {
  return new Date(date).getTime()
}

function SortArray(x: UsersItemsType, y: UsersItemsType) {
  return `${x.firstName || ''}${x.lastName || ""}${x.userTag || ''}`.localeCompare(`${y.firstName || ''}${y.lastName || ""}${y.userTag || ''}`);
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
  // статус загрузки пользователей 
  const loading = useAppSelector(getLoading)
  // ошибка с запросом  к серверу
  const errorGlobalResponse = useAppSelector(getGlobalError)
  const dispatch = useAppDispatch()
  const sortUsers = useCallback((listUsers: UsersItemsType[]) => {
    const currentYear: UsersItemsType[] = []
    const nextYear: UsersItemsType[] = []
    for (let i = 0; i < listUsers.length; i++) {
      const item = listUsers[i]
      if (new Date(getCurrentDay()).getTime() > new Date(comapreMonth(item.birthday)).getTime()) {
        currentYear.push(item)
      } else {
        nextYear.push(item)
      }
    }

    return {
      currentYear: currentYear.sort((a: UsersItemsType, b: UsersItemsType) => new Date(comapreMonth(a.birthday)).getTime() - new Date(comapreMonth(b.birthday)).getTime()),
      nextYear: nextYear.sort((a: UsersItemsType, b: UsersItemsType) => new Date(comapreMonth(a.birthday)).getTime() - new Date(comapreMonth(b.birthday)).getTime())
    }
  }, [])
  function filterIt(arr: any[], searchKey: string) {
    return arr.filter(obj => Object.keys(obj).some(key => {
      if (
        key === 'firstName' ||
        key === 'lastName' ||
        key === 'userTag'
      ) {
        return obj[key].toUpperCase().includes(searchKey.toUpperCase())
      }
    }));
  }
  const demoUsersItem: UsersItemsType = {
    "id": "497f6eca-6276-4993-bfeb-53gasfaf08",
    "avatarUrl": "https://api.lorem.space/image/face?w=120&h=120",
    "firstName": "Mike",
    "lastName": "Smith",
    "userTag": "ms",
    "department": "ios",
    "position": "IOS developer",
    "birthday": "1992-04-14",
    "phone": "+79001234512"
  }



  const modeUsers = useMemo((): ReactNode => {


    let results: UsersItemsType[] = [];
    if (search.length > 1) {
      results = filterIt(users, search)
    } else {
      results = users
    }
    if (departamnet !== Endpoints.ALL) {
      results = results.filter(item => item.department === departamnet)
    }
    if (!!!results?.length) {
      return <EmpetyValues
        icon={< Magnifier />}
        description='Попробуй скорректировать запрос'
        title='Мы никого не нашли'
      />
    }

    if (!!!sortMode) {
      return results.map(item => <UserItem key={item.id} data={item} />)
    } else {
      if (sortMode === 2) {
        return <div>
          {sortUsers(results).nextYear.map(item => <UserItem isBorn key={item.id} data={item} />)}
          <TextInserLine
            text={new Date().getFullYear() + 1}
          />
          {sortUsers(results).currentYear.map(item => <UserItem isBorn key={item.id} data={item} />)}
        </div>
      } else {
        results = [...results].sort((a: UsersItemsType, b: UsersItemsType) => {
          return SortArray(a, b)
        })

        return [...results].map(item => <UserItem key={item.id} data={item} />)
      }
    }

  }, [search, departamnet, loading, users, sortMode])
  const { data, isError, refetch } = useGeUsersQuery({}, {
    pollingInterval: 300000
  })


  const fnGetUsers = async () => {
    refetch()
  }

  useEffect(() => {
    dispatch(setGlobalError(isError))
    dispatch(setItems(data))
  }, [])
 
  return (
    <div
      className={styles.usersWrapper}
    >
      <div
        className={styles.usersItemWrapper}
      >
        {/* {stateUsers.map(item => <UserItem key={item.id} data={item} />)} */}
        {
          errorGlobalResponse ?
            <EmpetyValues
              icon={< Aliens />}
              description='Постараемся быстро починить'
              title='Какой-то сверхразум все сломал'
              button={{
                fnPress: fnGetUsers,
                text: 'Попробовать снова'
              }}
            />
            :
            loading ?
              Array(10).fill(demoUsersItem).map((item, ind) => <UserItem isLoading key={ind} data={item} />)
              :
              modeUsers
        }

      </div>
    </div>
  )
}
export default Users
