import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from 'process';

import { BaseApi, Endpoints } from '../Constant/constant';
import { Api } from '../Utilts/Api';
import { toQueryString } from '../Utilts/helper';

export type UsersItemsType = {
    id: string;
    avatarUrl: string;
    firstName: string;
    lastName: string;
    userTag: string;
    department: string;
    position: string;
    birthday: string;
    phone: string;
}

export class UserServices {
    static async getUsers({ __example = Endpoints.ALL }: { __example?: Endpoints }): Promise<UsersItemsType[]> {
        const response = await Api.get(``, {
            params: {
                // __example,
                __dynamic: true
            }
        })
        return response.data.items
    }
}

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BaseApi.BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            return headers
        },
    }),
    endpoints: (builder) => ({
        geUsers: builder.query({
            query: () => ({
                url: '',
                params: {
                    __dynamic: true
                }
            }),
            transformResponse: (data: { items: UsersItemsType }) => {
                return !!data?.items ? data.items : []
            },
        }),


    })
})

export const { useGeUsersQuery } = usersApi