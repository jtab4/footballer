import Dashboard from "@/components/main/main-dashboard"
import { cookies } from 'next/headers'
import { checkAuthorized } from "@/lib/auth/authLogic"
import { redirect } from 'next/navigation'
export default async function Main() {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if(token){
        if(await !checkAuthorized(token.value)) {
            redirect('/login')
        }
        
        
    }
    else {
        redirect('/login')
    }
    
    return (
        <Dashboard/>
    )
}