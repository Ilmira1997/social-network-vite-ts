
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQuery } from "../../utils/baseQuery";

interface IRegisterUserPayload {
    mail: string;
    phone_number: string;
    password: string;
    name: string;
    user_city: string;
}
interface IRegisterUserResponse {
    status: number;
    user_id: number;
}

interface ILoginUserResponse extends IRegisterUserResponse {}

interface ILoginUserPayload {
    email: string;
    password: string;
}


interface IGetUserResponse {
    status: number;
    message: {
        mail: string;
        phone_number: string;
        user_id: string;
        name: string;
        reg_date: string;
        city: string;
    }
}
export const authApi = createApi({
    reducerPath: 'autApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<IRegisterUserResponse, IRegisterUserPayload>({
            query: (payload) => ({
                url: "registration",
                method: "POST",
                body: payload,

            }),
            
        }),

        loginUser: builder.mutation<ILoginUserResponse,ILoginUserPayload> ({
            query: (payload) => ({
                url: "login",
                method: "POST",
                body: payload,
            })
        }),

        getUser: builder.query<IGetUserResponse,string>({
            query: (userId) => `/user?user_id=${userId}` ,
        }),
    }),
});

export const {useGetUserQuery,useLoginUserMutation,useRegisterUserMutation}=authApi


