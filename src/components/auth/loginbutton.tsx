"use client"

import { useFormStatus } from 'react-dom'

export default function LoginButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            className="w-full bg-[#729762] text-white py-3 px-6 rounded-md shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
            disabled={pending}>
            {pending ? (<>Proccessing...</>) : (<>Log In</>)}
        </button>
    )
}
