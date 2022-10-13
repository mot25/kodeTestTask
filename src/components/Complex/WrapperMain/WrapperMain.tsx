import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { getIsInternet, getLoading, setLoading } from '../../../store/slice/appStorage';
import { getUsers } from '../../../store/slice/fetchUsers';
import { TopStatusJoin } from '../../Simple/TopStatusJoin';
import { SectionWithSearch } from './parts/SectionWithSearch';
import { Tabs } from './parts/Tabs';
import styles from './WrapperMain.module.scss';


const WrapperMain = () => {
  const isInternet = useAppSelector(getIsInternet)
  const isLoading = useAppSelector(getLoading)
  const dispatch = useAppDispatch()
  const [visTop, setVisTop] = useState<boolean>(false)
  let delayDebounceFn: ReturnType<typeof setTimeout>
  const users = useAppSelector(getUsers)

  const checkStatusTop = () => {
    if (!isInternet) {
      setVisTop(true)
    }
    if (!isLoading && isInternet) {
      // delayDebounceFn = setTimeout(() => {
        setVisTop(false)
      // }, 200)
    }
  }
  useEffect(() => {
    checkStatusTop()
    return () => clearTimeout(delayDebounceFn)
  }, [isInternet, isLoading])
  return (
    <section
      className={styles.WrapperMain}
    >
      <div
        className={styles.top}
      >
        {
          visTop ?
            <TopStatusJoin />
            :
            <SectionWithSearch />
        }
      </div>
      <Tabs />
      <div
        className={styles.outletWrapper}
      >
        <Outlet />
      </div>
    </section>
  )
}

export default WrapperMain