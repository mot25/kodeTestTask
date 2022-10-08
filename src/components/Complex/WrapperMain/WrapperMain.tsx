import React from 'react';
import { Outlet } from 'react-router-dom';

import { SectionWithSearch } from './parts/SectionWithSearch';
import { Tabs } from './parts/Tabs';

type Props = {}

const WrapperMain = (props: Props) => {
  return (
    <section>
      <SectionWithSearch />
      <Tabs />
      <div>
        <Outlet />
      </div>
    </section>
  )
}

export default WrapperMain