import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as Favorites } from '../../../assets/icon/Favorite.svg';
import { ReactComponent as Phone } from '../../../assets/icon/Phone.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { useGeUsersQuery, UsersItemsType } from '../../../Services/UserServices';
import { setGlobalError, setLoading } from '../../../store/slice/appStorage';
import { getUsers, setItems } from '../../../store/slice/fetchUsers';
import { declOfNum, maskPhone, parserDateToNoramal } from '../../../Utilts/helper';
import styles from './Details.module.scss';

type Props = {}

const Details = (props: Props) => {
  const dispatch = useAppDispatch()
  // Получения всех пользователей
  const users = useAppSelector(getUsers)
  const { id } = useParams()

  const [user, setUsers] = useState<UsersItemsType | undefined>()
  useEffect(() => {
    setUsers(users?.find(item => item.id === id))
  }, [id, users])




  const getYearsPeople = (date: string): number => new Date().getFullYear() - new Date(date).getFullYear()

  return (
    <section
      className={styles.Details}
    >
      <div
        className={styles.top}
      >
        <div
          className={styles.top_content}
        >
          <div
            className={styles.avatarWrapper}
          >
            <img
              className={styles.avatar}
              src={user?.avatarUrl}
            />
          </div>
          <div
            className={styles.nameWrapper}
          >
            <h1
              className={styles.name}
            >{user?.firstName || ''} {user?.lastName || ''}</h1>
            <span
              className={styles.nickname}
            >{user?.userTag || ''}</span>
          </div>
          <p
            className={styles.departament}
          >{user?.department || ''}</p>
        </div>
      </div>
      <div
        className={styles.bottom}
      >
        <div
          className={styles.bottomWtapperItem}
        >
          <div
            className={styles.left}
          >
            <div
              className={styles.leftContent}
            >
              <div
                className={styles.iconWrapper}
              >
                <Favorites />
              </div>
              <span
                className={styles.leftText}
              >{parserDateToNoramal(user?.birthday || "")}</span>

            </div>
          </div>
          <div
            className={styles.right}
          >

            <span>{declOfNum(+getYearsPeople(user?.birthday || ''), ['год', 'года', 'лет'])} </span>
          </div>
        </div>
        <div
          className={styles.bottomWtapperItem}
        >
          <div
            className={styles.left}
          >
            <div
              className={styles.leftContent}
            >
              <div
                className={styles.iconWrapper}
              >
                <Phone />
              </div>
              <span
                className={styles.leftText}
              >{maskPhone(user?.phone)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details