import React, { FC, ReactNode } from 'react';

import styles from './Input.module.scss';

type Props = {
    value: string
    error?: string
    onChange: (str: string) => void
    leftComponent?: {
        icon: ReactNode
        fnTarget?: () => void
    }
    rightComponent?: {
        icon: ReactNode
        fnTarget?: () => void
    }
    placeholder?: string
}

const Input: FC<Props> = ({
    value,
    error,
    onChange,
    leftComponent,
    rightComponent,
    placeholder
}) => {
    return (
        <div
            className={styles.InputWrapper}
        >
            {leftComponent && <div
                className={styles.leftComponent}
                onClick={leftComponent.fnTarget}
            >
                {leftComponent.icon}
            </div>}
            <input
                className={styles.input}
                value={value}
                placeholder={placeholder}
                onChange={e => onChange(e.target.value)}
            />
            {rightComponent && <div
                className={styles.rightComponent}
                onClick={rightComponent.fnTarget}
            >
                {rightComponent.icon}
            </div>}
        </div>
    )
}

export default Input