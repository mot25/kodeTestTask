import 'react-loading-skeleton/dist/skeleton.css';

import React, { FC, PropsWithChildren } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as Goose } from '../../../../../assets/image/Goose.svg';
import { RoutesPage } from '../../../../../Constant/constant';
import { UsersItemsType } from '../../../../../Services/UserServices';
import { getCurrentDay, getNameRusMonth } from '../../../../../Utilts/helper';
import styles from './UserItem.module.scss';

type Props = {
    data: UsersItemsType
    isBorn?: boolean
    isLoading?: boolean
}
const UserItem: FC<Props> = ({ data, isLoading = false, isBorn = false }) => {
  
    return (
        <Link
            style={{ textDecoration: 'none' }}
            to={`${RoutesPage.DETAILS_PAGE}/${data.id}`}
            className={styles.UserItemWrapper}
        >
            <div
                className={styles.left}
            >
                <div
                    className={styles.imageWrapper}
                >
                    {
                        isLoading ?

                            <Skeleton
                                circle
                                width={72}
                                height={72}
                            />
                            :
                            data.avatarUrl ?
                                <img
                                    className={styles.image}
                                    src={data.avatarUrl}
                                />
                                :
                                <Goose />
                    }
                </div>
                <div
                    className={styles.contentWrapper}
                >
                    <div
                        className={styles.nameWrapper}
                    >
                        {isLoading ?

                            <Skeleton
                                width={144}
                                height={16}
                                style={{ borderRadius: '50px' }}
                            />
                            :
                            <>
                                <p
                                    className={styles.name}
                                >{`${data.firstName} ${data.lastName}`}</p>
                                <span
                                    className={styles.shortName}
                                >{data.userTag}</span>
                            </>
                        }
                    </div>
                    <span
                        className={styles.tag}
                    >
                        {
                            isLoading ?
                                <Skeleton
                                    width={80}
                                    height={12}
                                    style={{ marginTop: '6px', borderRadius: '50px' }}
                                />
                                :
                                data.department
                        }
                    </span>
                </div>
            </div>
            {isBorn && <div
                className={styles.right}
            >
                <p
                    className={styles.rightText}
                >
                    {getNameRusMonth(data.birthday)}
                </p>
            </div>}
        </Link>
    )
}

export default UserItem