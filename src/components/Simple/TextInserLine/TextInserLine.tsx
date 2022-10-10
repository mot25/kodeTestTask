import React, { FC } from 'react';

import styles from './TextInserLine.module.scss';

type Props = {
    text: number
}

const TextInserLine: FC<Props> = ({ text }) => {
    return (
        <div
            className={styles.TextInserLine}
        >
            <div
                className={styles.line}
            />
            <span
                className={styles.textLine}
            >{text}</span>
            <div
                className={styles.line}
            />
        </div>
    )
}

export default TextInserLine