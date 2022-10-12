import React, { FC } from 'react';

import { ReactComponent as Goose } from '../../../../../assets/image/Goose.svg';
import { UsersItemsType } from '../../../../../Services/UserServices';
import { getCurrentDay, getNameRusMonth } from '../../../../../Utilts/helper';
import styles from './UserItem.module.scss';

type Props = {
    data: UsersItemsType
    isBorn?: boolean
}

const UserItem: FC<Props> = ({ data, isBorn = false }) => {
    // console.log('getCurrentDay', getCurrentDay());

    return (
        <div
            className={styles.UserItemWrapper}
        >
            <div
                className={styles.left}
            >
                <div
                    className={styles.imageWrapper}
                >
                    {
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
                        <p
                            className={styles.name}
                        >{`${data.firstName} ${data.lastName}`}</p>
                        <span
                            className={styles.shortName}
                        >{data.userTag}</span>
                    </div>
                    <span
                        className={styles.tag}
                    >
                        {data.department}
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
        </div>
    )
}

export default UserItem