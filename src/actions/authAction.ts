'use server'

import { validateData } from '@/lib/utils';
import {login} from '@/lib/auth/loginLogic'
import { cookies } from 'next/headers'
export async function authenticate(prevState : any, formData : FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
        if (!validateData([email, password])) {
            return { message: 'Please enter valid credentials' };
        }
        const response = login(email,password)
        if((await response).authorized){
            cookies().set('token', (await response).token as string)
        }

        return response
    }
    catch (error) {
        return { authorized: false, message: 'An error occurred during authentication' };
    }

}

export async function signUp(prevState : any, formData : FormData) {
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;
    const repeatedPassword = formData.get("repeated") as string | null;
    try {

        if (!validateData([email, password, repeatedPassword])) {
            return { message: 'Please enter valid credentials' };
        }
        if (password != repeatedPassword) {
            return {message: "Passwords don't matches"}
        }

    } catch (error) {
        if (error) {}
        throw error
    }
}
