import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ReactComponent as BackArrow } from '../../../assets/icon/BackArrow.svg';
import { ReactComponent as Favorites } from '../../../assets/icon/Favorite.svg';
import { ReactComponent as Phone } from '../../../assets/icon/Phone.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { useGeUsersQuery, UsersItemsType } from '../../../Services/UserServices';
import { setGlobalError, setLoading } from '../../../store/slice/appStorage';
import { getUsers, setItems } from '../../../store/slice/fetchUsers';
import { maskPhone, parserDateToNoramal, plural } from '../../../Utilts/helper';
import styles from './Details.module.scss';

type Props = {}

const Details = (props: Props) => {
  const users = useAppSelector(getUsers)
  const navigate = useNavigate();

  const { id } = useParams()
  const [user, setUser] = useState<UsersItemsType | undefined>()
  useEffect(() => {
    setUser(users?.find(item => item.id === id))
  }, [id, users])

  const getYearPeople = () => {
    const count = (new Date().getFullYear() - new Date(user?.birthday || '').getFullYear())
    return `${count} ${plural(count, ['год', 'года', 'лет'])}`
  }
  return (
    <section
      className={styles.Details}
    >
      <div
        className={styles.top}
      >
        <div
          onClick={navigate.bind(this, -1)}
          className={styles.backWrapper}
        >
          <BackArrow />
        </div>
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
            <span>{getYearPeople()} </span>
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