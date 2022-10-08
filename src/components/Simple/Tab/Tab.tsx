import React, { FC, useMemo } from 'react';

import { IconTab } from './parts/IconTab';
import styles from './Tab.module.scss';

export type TabType = {
    id: number
    label: string
}
type Props = {
    list: TabType[]
    onChange: (id: number | undefined) => void
    value?: number
}

const Tab: FC<Props> = ({
    list,
    onChange,
    value
}) => {
    const fnChange = (id: number) => (id === value) ? onChange(undefined) : onChange(id)
    return (
        <div
            className={styles.tabWrapper}
        >
            {list.map(item => {
                return <div
                    onClick={fnChange.bind(this, item.id)}
                    className={styles.tabItemWrapper}
                    key={item.id}
                >
                    <IconTab
                        isActive={item.id === value}
                    />
                    <span
                        className={styles.textTab}
                    >
                        {item.label}
                    </span>
                </div>
            })}
        </div>
    )
}

export default Tab