'use server'

import {validateData} from '@/lib/utils';
import {login} from '@/lib/auth/loginLogic'
import {register} from '@/lib/auth/registerLogic'
import {cookies} from 'next/headers'
import {redirect} from 'next/navigation'
import {revalidatePath} from 'next/cache'
export async function authenticate(prevState : any, formData : FormData) {
    const email = formData.get("email")as string | null;
    const password = formData.get("password")as string | null;

    if (!validateData([email, password])) {
        return {message: 'Please enter valid credentials'};
    }
    const response = login(email, password)
    if ((await response).authorized) {
        cookies().set('token', (await response).token as string)
        revalidatePath('/dashboard')
        redirect('/dashboard')
    }

    return response

}

export async function signUp(prevState : any, formData : FormData) {
    const email = formData.get("email")as string | null;
    const password = formData.get("password")as string | null;
    const repeatedPassword = formData.get("repeated")as string | null;

    if (!validateData([email, password, repeatedPassword])) {
        return {message: 'Please enter valid credentials'};
    }
    if (password != repeatedPassword) {
        return {message: "Passwords don't matches"}
    }
    const response = register(email, password)
    if ((await response).registered) {
        redirect('/login')
        revalidatePath('/login')
    }
    return response

}
