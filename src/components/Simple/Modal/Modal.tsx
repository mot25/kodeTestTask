import React, { FC, ReactNode, useEffect, useRef } from 'react';

import { ReactComponent as CloseWrapper } from '../../../assets/icon/closeModal.svg';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import styles from './Modal.module.scss';

type Props = {
    title: string
    onClose: () => void
    children: ReactNode
    isVis: boolean
}

const Modal: FC<Props> = ({
    title,
    onClose,
    children,
    isVis
}) => {
    const body = document.querySelector('body')
    const ref = useRef<HTMLDivElement>(null)
    useOnClickOutside(ref, onClose)
    useEffect(() => {
        body?.classList.add('scroll_block')
        return () => body?.classList.remove('scroll_block')
    }, [])
    return (
        <div
            className={styles.modalWrapper}
        >
            <div
                ref={ref}
                className={styles.modal}
            >
                <div
                    className={styles.topWrapper}
                >
                    <span
                        className={styles.title}
                    >{title}</span>
                    <div
                        onClick={onClose}
                        className={styles.closeWrapper}
                    >
                        <CloseWrapper />
                    </div>
                </div>
                <div
                    className={styles.childWrapper}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal