import React, { useDebugValue, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Endpoints, RoutesPage } from '../../../Constant/constant';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { UserServices } from '../../../Services/UserServices';
import { getUsers, setItems } from '../../../store/slice/fetchUsers';
import { Users } from '../../Pages/Users';
import { WrapperMain } from '../WrapperMain';
import styles from './StartScreen.module.scss';

type Props = {}

const StartScreen = (props: Props) => {
    const dispatch = useAppDispatch()
    const getAllUsers = async () => {
        try {
            const response = await UserServices.getUsers({
                __example: Endpoints.ALL
            })
            dispatch(setItems(response))

        } catch (error) {
            console.log('getAllUsers');
            // @ts-ignore
            console.log(error.response.config.data);
            // @ts-ignore
            console.log(error.response.data.message);
            console.log('====================================')
        }
    }
    // console.log('users', JSON.stringify(users));

    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div
            className={styles.container}
        >
            <Routes>
                <Route
                    path={RoutesPage.MAIN_PAGE}
                    element={<WrapperMain />}
                >
                    <Route
                        index
                        // path={RoutesPage.PAGE_USERS}
                        element={<Users />}
                    />
                </Route>
            </Routes>
        </div>
    )
}

export default StartScreen