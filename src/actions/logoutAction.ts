'use server'
import {logout} from "@/lib/auth/logout"
import { redirect } from 'next/navigation'
export async function logout_user() {
    logout()
    redirect('/login')
}