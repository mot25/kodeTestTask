import React from 'react';
import { Outlet } from 'react-router-dom';
import { SectionWithSearch } from './parts/SectionWithSearch';

type Props = {}

const WrapperMain = (props: Props) => {
  return (
    <section>
      <SectionWithSearch />
      <Outlet />
    </section>
  )
}

export default WrapperMain