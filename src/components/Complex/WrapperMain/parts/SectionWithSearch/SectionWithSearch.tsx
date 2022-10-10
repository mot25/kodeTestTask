import classNames from 'classnames';
import produce from 'immer';
import React, { useEffect, useState } from 'react';

import { ReactComponent as Search } from '../../../../../assets/icon/Search.svg';
import { ReactComponent as Sort } from '../../../../../assets/icon/Sort.svg';
import { Input } from '../../../../Simple/Input';
import { Modal } from '../../../../Simple/Modal';
import { Tab } from '../../../../Simple/Tab';
import { TabType } from '../../../../Simple/Tab/Tab';
import styles from './SectionWithSearch.module.scss';

type Props = {}
type StateType = {
  value: string
  idSort: number | undefined
}

const TabList: TabType[] = [
  {
    id: 1,
    label: 'По алфавиту'
  },
  {
    id: 2,
    label: 'По дню рождения'
  },
]
const SectionWithSearch = (props: Props) => {
  const [value, setValue] = useState<StateType>({
    value: ''
  } as StateType)
  let timeout: ReturnType<typeof setTimeout>
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const sort = () => setIsShowModal(true)
  const changeState = (value: string | number | undefined, key: keyof StateType) => {
    setValue(produce(
      draft => {
        const f: any = draft
        f[key] = value
      }
    ))
    if (key === 'idSort')
      timeout = setTimeout(() => setIsShowModal(false), 1000)

  }
  useEffect(() => {
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  
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
            leftComponent={
              {
                icon: <Search
                  className={classNames({
                      [styles.__activeLoading]: true
                  })}
                />,
              }
            }
            rightComponent={
              {
                icon: <Sort
                  className={classNames(styles.sort, {
                    [styles.__activeSort]: value.idSort !== undefined
                  })}
                />,
                fnTarget: sort
              }
            }
            value={value.value}
            onChange={e => changeState(e, 'value')}
            placeholder='Введи имя, тег, почту...'
          />
        </div>
      </div>
      {isShowModal && <Modal
        isVis={isShowModal}
        title='Сортировка'
        onClose={setIsShowModal.bind(this, false)}
      >
        <Tab
          onChange={e => changeState(e, 'idSort')}
          value={value.idSort}
          list={TabList}
        />
      </Modal>}
    </>
  )
}

export default SectionWithSearch