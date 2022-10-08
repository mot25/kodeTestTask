import React, { useState } from 'react';

import { ReactComponent as Search } from '../../../../../assets/icon/Search.svg';
import { ReactComponent as Sort } from '../../../../../assets/icon/Sort.svg';
import { Input } from '../../../../Simple/Input';
import styles from './SectionWithSearch.module.scss';

type Props = {}

const SectionWithSearch = (props: Props) => {
  const [value, setValue] = useState<string>('')
  const sort = () => {
    console.log('sort');
  }
  return (
    <div className={styles.SectionWithSearchWrapper}>
      <div
        className={styles.top}
      >
        <h1
          className={styles.top_title}
        >Поиск</h1>
      </div>
      <div
        className={styles.bottom}
      >

        <Input
          rightComponent={
            {
              icon: <Sort />,
              fnTarget: sort
            }
          }
          leftComponent={
            {
              icon: <Search />,
            }
          }
          value={value}
          onChange={setValue}
          placeholder='Введи имя, тег, почту...'
        />
      </div>
    </div>
  )
}

export default SectionWithSearch