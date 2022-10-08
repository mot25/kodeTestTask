import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './IconTab.module.scss';

type Props = {
    isActive: boolean
}

const IconTab: FC<Props> = ({ isActive }) => {
    return (
        <div
            className={classNames(styles.wrapper, {
                [styles.__active_wrapper]: isActive
            })}
        >
            <div
                className={styles.centerActive}
            />
        </div>
    )
}

export default IconTab