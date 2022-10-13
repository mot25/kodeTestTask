import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import { Endpoints } from '../../../../../Constant/constant';
import { useAppDispatch } from '../../../../../hooks/useStore';
import { setFilterDepartament } from '../../../../../store/slice/appStorage';
import styles from './Tabs.module.scss';

type Props = {}
type EndpointsTabNamesType = {
    [key in Endpoints]: string
}
const EndpointsTab: Partial<EndpointsTabNamesType> = {
    all: "Все",
    analytics: 'Аналитика',
    android: 'Android',
    back_office: 'Бэк-офис',
    backend: 'Backend',
    design: 'Дизайн',
    frontend: 'Frontend',
    hr: 'HR',
    ios: 'iOS',
    management: "Менеджмент",
    pr: 'PR',
    qa: 'QA',
    support: 'Техподдержка'

}

type TabsType = {
    id: Endpoints
    label?: string
}

const TabsList: TabsType[] = [
    {
        id: Endpoints.ALL,
        label: EndpointsTab[Endpoints.ALL]
    },
    {
        id: Endpoints.ANDROID,
        label: EndpointsTab[Endpoints.ANDROID]
    },
    {
        id: Endpoints.IOS,
        label: EndpointsTab[Endpoints.IOS]
    },
    {
        id: Endpoints.DESIGN,
        label: EndpointsTab[Endpoints.DESIGN]
    },
    {
        id: Endpoints.MANAGEMENT,
        label: EndpointsTab[Endpoints.MANAGEMENT]
    },
    {
        id: Endpoints.QA,
        label: EndpointsTab[Endpoints.QA]
    },
    {
        id: Endpoints.BACK_OFFICE,
        label: EndpointsTab[Endpoints.BACK_OFFICE]
    },
    {
        id: Endpoints.FRONTEND,
        label: EndpointsTab[Endpoints.FRONTEND]
    },
    {
        id: Endpoints.HR,
        label: EndpointsTab[Endpoints.HR]
    },
    {
        id: Endpoints.PR,
        label: EndpointsTab[Endpoints.PR]
    },
    {
        id: Endpoints.BACKEND,
        label: EndpointsTab[Endpoints.BACKEND]
    },
    {
        id: Endpoints.SUPPORT,
        label: EndpointsTab[Endpoints.SUPPORT]
    },
    {
        id: Endpoints.ANALYTICS,
        label: EndpointsTab[Endpoints.ANALYTICS]
    },
]

const Tabs = (props: Props) => {
    const dispatch = useAppDispatch()
    const [selectTab, setSelectTab] = useState<Endpoints>(Endpoints.ALL)
    useEffect(() => {
        dispatch(setFilterDepartament(selectTab))
    }, [selectTab])
    return (
        <div
            className={styles.tabsWrapper}
        >
            {TabsList.map(item => {
                return <div
                    onClick={setSelectTab.bind(this, item.id)}
                    className={classNames(styles.tabItem, {
                        [styles.__activeTab]: selectTab === item.id
                    })}
                    key={item.id}
                >
                    <p
                        className={styles.tabItem_text}
                    >{item.label}</p>
                </div>
            })}
        </div>
    )
}

export default Tabs