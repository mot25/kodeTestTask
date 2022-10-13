import React, { FC, ReactNode } from 'react';

import styles from './EmpetyValues.module.scss';

type Props = {
    icon: ReactNode
    title: string
    description: string
    button?: {
        fnPress: () => void
        text: string
    }
}

const EmpetyValues: FC<Props> = ({
    icon,
    title,
    description,
    button
}) => {
    return (
        <div
            className={styles.wrapper}
        >
            <div
                className={styles.content}
            >
                <div
                    className={styles.iconWrapper}
                >
                    {icon}
                </div>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                {button && <div
                    onClick={button.fnPress}
                    className={styles.buttonWrapper}
                >
                    <p
                        className={styles.button_text}
                    >{button.text}</p>

                </div>}
            </div>
        </div>
    )
}

export default EmpetyValues