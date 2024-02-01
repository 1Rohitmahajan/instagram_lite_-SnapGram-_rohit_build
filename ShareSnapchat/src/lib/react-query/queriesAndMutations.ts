import { INewUser } from '@/types';
import {
 useQuery,
 useMutation,
 useQueryClient,
 useInfiniteQuery
} from '@tanstack/react-query';
import { createUserAccount, signInAccount,signOutAccount } from '../appwrite/api';

export const useCreateUserAccount=()=>
{
    return useMutation({
        mutationFn:(user:INewUser)=>createUserAccount(user),
    });
}
// Sign-in Account
export const useSignInAccount=()=>
{
    return useMutation({
        mutationFn:(user:{
            email:string;
            password:string
        })=>signInAccount(user),
       
    
    });
}

//Sign Out Account

export const useSignOutAccount=()=>
{
    return useMutation({
        mutationFn:signOutAccount,
       
    
    });
}