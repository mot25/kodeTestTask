import { config } from 'process';

import { Endpoints } from '../Constant/constant';
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
                __example
            }
        })
        return response.data
    }
}