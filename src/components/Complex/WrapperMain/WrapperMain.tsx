import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { getIsInternet, getLoading } from '../../../store/slice/appStorage';
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

  const checkStatusTop = () => {
    if (!isInternet) {
      setVisTop(true)
    }
    // delayDebounceFn = setTimeout(() => {
    if (!isLoading && isInternet) {
      console.log('====================================');
      console.log('remove');
      console.log('====================================');
      setVisTop(false)
    }
  }
  useEffect(() => {

    // }, 2000)
    // setInterval(() => {
    checkStatusTop()
    // }, 500)
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