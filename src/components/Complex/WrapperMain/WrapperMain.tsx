import React from 'react';
import { Outlet } from 'react-router-dom';

import { SectionWithSearch } from './parts/SectionWithSearch';
import { Tabs } from './parts/Tabs';
import styles from './WrapperMain.module.scss';

type Props = {}

const WrapperMain = (props: Props) => {
  return (
    <section
      className={styles.WrapperMain}
    >
      <SectionWithSearch />
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