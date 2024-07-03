"use client"

import RegisterButton from "./registerbutton"
import {signUp} from "@/actions/authAction"
import { useFormState } from 'react-dom'

const initialState = {
    message: '',
}
export default function RegisterForm() {
    const [state, formAction] = useFormState(signUp, initialState)
    return (
        <form action={formAction} className="space-y-4">
            <div className="flex flex-col">
                <label htmlFor="email" className="block text-lg text-[#2E4628] mb-2">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="px-4 py-3 text-black rounded-md border border-gray-300 focus:outline-none focus:border-green-600 transition duration-300"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="block text-lg text-[#2E4628] mb-2">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="px-4 py-3 text-black rounded-md border border-gray-300 focus:outline-none focus:border-green-600 transition duration-300"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="block text-lg text-[#2E4628] mb-2">Repeat password</label>
                <input
                    type="password"
                    id="password"
                    name="repeated"
                    required
                    className="px-4 py-3 text-black rounded-md border border-gray-300 focus:outline-none focus:border-green-600 transition duration-300"/>
            </div>
            {state?.message && (
                <div className="border border-red-500 bg-red-100 text-red-700 p-3 rounded-md mb-4">
                    {state.message}
                </div>
            )}
            <RegisterButton/>
            
        </form>
    )
}