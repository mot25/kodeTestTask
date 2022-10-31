import React, { useDebugValue, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Endpoints, RoutesPage } from '../../../Constant/constant';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { useGeUsersQuery, UserServices } from '../../../Services/UserServices';
import { getGlobalError, getIsInternet, setGlobalError, setIsInternet, setLoading } from '../../../store/slice/appStorage';
import { getUsers, setItems } from '../../../store/slice/fetchUsers';
import { Details } from '../../Pages/Details';
import { Users } from '../../Pages/Users';
import { WrapperMain } from '../WrapperMain';
import styles from './StartScreen.module.scss';

type Props = {}

const StartScreen = () => {
     const dispatch = useAppDispatch()
    window.addEventListener('online', () => {
        refetch()
        dispatch(setIsInternet(true))
        dispatch(setLoading(true))

    });
    window.addEventListener('offline', () => {
        dispatch(setIsInternet(false))

    });
    const getAllUsers = async () => {
        dispatch(setLoading(true))
        try {
            const response = await UserServices.getUsers({
                __example: Endpoints.ALL
            })
            dispatch(setItems(response))
            dispatch(setGlobalError(false))

        } catch (error: any) {
            console.warn('getAllUsers');
            console.warn(error.response);
            console.warn('====================================')
            dispatch(setGlobalError(true))

        }
        dispatch(setLoading(false))
    }

    useEffect(() => {
        dispatch(setIsInternet(navigator.onLine))
    }, [])
    const { data, isError, isLoading, refetch } = useGeUsersQuery({}, {
    })


    useEffect(() => {
        dispatch(setItems(data))
    }, [data])

    useEffect(() => {
        dispatch(setItems(data))
        dispatch(setLoading(isLoading))
        dispatch(setGlobalError(isError))
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
                        element={<Users />}
                    />
                </Route>
                <Route
                    path={`${RoutesPage.DETAILS_PAGE}/:id`}
                    element={
                        <Details />
                    }
                />
                {/* <Route
                    path={RoutesPage.ALL}
                    element={<Users />}
                /> */}
            </Routes>
        </div>
    )
}

export default StartScreen