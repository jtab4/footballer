'use server'

import { validateData } from '@/lib/utils';

export async function authenticate(prevState : any, formData : FormData) {
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;
    try {
        if (!validateData([email, password])) {
            return { message: 'Please enter valid credentials' };
        }
        console.log(formData.get("email"), formData.get("password"))

    } catch (error) {
        if (error) {}
        throw error
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
