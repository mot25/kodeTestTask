import React, { useEffect, useState } from 'react';

import { ReactComponent as Search } from '../../../../../assets/icon/Search.svg';
import { ReactComponent as Sort } from '../../../../../assets/icon/Sort.svg';
import { Input } from '../../../../Simple/Input';
import { Modal } from '../../../../Simple/Modal';
import styles from './SectionWithSearch.module.scss';

type Props = {}

const SectionWithSearch = (props: Props) => {
  const [value, setValue] = useState<string>('')
  const [isShowModal, setIsShowModal] = useState<boolean>(true)

  const sort = () => {
    console.log('sort');
  }

  return (
    <>
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
      {isShowModal && <Modal
        isVis={isShowModal}
        title='Сортировка'
        onClose={setIsShowModal.bind(this, false)}
      >
        sfvsevr
      </Modal>}
    </>
  )
}

export default SectionWithSearch