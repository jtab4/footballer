"use client"

import { useFormStatus } from 'react-dom'
export default function CreatePlayerButton () {
    const { pending } = useFormStatus()
    return (
        <button
                type="submit"
                className="mt-4 bg-[#4e5405] text-[#CDCCCA] py-2 px-4 rounded-md hover:bg-[#636808] transition duration-300"
            >
                 {pending ? (<>Creating new player...</>) : (<>Create new player</>)}
            </button>
    )
}