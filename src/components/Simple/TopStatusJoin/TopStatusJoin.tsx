import React from 'react';

import { useAppSelector } from '../../../hooks/useStore';
import { getIsInternet, getLoading } from '../../../store/slice/appStorage';
import styles from './TopStatusJoin.module.scss';

type Props = {}

const TopStatusJoin = (props: Props) => {
    const isInternet = useAppSelector(getIsInternet)
    const isLoading = useAppSelector(getLoading)
    return (
        <div
            className={styles.topWrapper}
            style={{
                backgroundColor: isInternet && isLoading ? '#6534FF' : '#F44336'
            }}
        >
            <div
            className={styles.bg}
            />
            <h1
                className={styles.title}
            >Поиск</h1>
            <h3
                className={styles.descr}
            >
                {isInternet && isLoading ? 'Секундочку, гружусь...' : 'Не могу обновить данные. Проверь соединение с интернетом.'}
            </h3>
        </div>
    )
}

export default TopStatusJoin