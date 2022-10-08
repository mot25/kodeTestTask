import React, { useState } from 'react';

import { Input } from '../../../../Simple/Input';
import styles from './SectionWithSearch.module.scss';

type Props = {}

const SectionWithSearch = (props: Props) => {
  const [value, setValue] = useState<string>('')
  return (
    <div className={styles.SectionWithSearchWrapper}>
      <div
        className={styles.top}
      >
        <h1>Поиск</h1>
      </div>
      <div
        className={styles.bottom}
      >
        <Input
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  )
}

export default SectionWithSearch