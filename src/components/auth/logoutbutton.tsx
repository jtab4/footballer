"use client"

import { useFormStatus } from 'react-dom'

export default function LogoutButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            className="text-sm text-gray-500 dark:text-black cursor-pointer hover:underline"
            disabled={pending}>
            {pending ? (<>Logging out...</>) : (<>Log out</>)}
        </button>
    )
}
