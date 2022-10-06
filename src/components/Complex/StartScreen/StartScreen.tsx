import React, { useDebugValue, useEffect } from 'react';

import { Endpoints } from '../../../Constant/constant';
import { useAppSelector } from '../../../hooks/useStore';
import { UserServices } from '../../../Services/UserServices';

type Props = {}

const StartScreen = (props: Props) => {
    const getAllUsers = async () => {
        try {
            const response = await UserServices.getUsers({
                __example: Endpoints.ALL
            })
            console.log('====================================');
            console.log('response', response);
            console.log('====================================');
        } catch (error) {
            console.log('getAllUsers');
            // @ts-ignore
            console.log(error.response.config.data);
            // @ts-ignore
            console.log(error.response.data.message);
            console.log('====================================')
        }
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div>StartScreen</div>
    )
}

export default StartScreen