'use client'
import { nationalities } from '@/constants/constants';
import { positions } from '@/constants/constants';
import { handleActionPlayer } from '@/actions/createPlayerAction';
import { useFormState } from 'react-dom'
import CreatePlayerButton from './create-player-button';

const initialState = {
    message: '',
}
export default function CreatePlayerForm () {
    const [state, formAction] = useFormState(handleActionPlayer, initialState)
    
    return (
        <form action={formAction}>
        <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter first name"
                name="firstname"
                required
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter last name"
                name="lastname"
                required
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Weight</label>
            <input
                type="number"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter weight (kg)"
                name="weight"
                required
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Height</label>
            <input
                type="number"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter height (cm)"
                name="height"
                required
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Nationality</label>
            <select
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                name="nationality"
                required
            >
                {nationalities.map(country => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Position</label>
            <select
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                name="position"
                required
            >
                {positions.map(position => (
                    <option key={position} value={position}>{position}</option>
                ))}
            </select>
        </div>
        <div className="text-center">
            {state?.message && (
                <div className="border border-red-500 bg-red-100 text-red-700 p-3 rounded-md mb-4">
                    {state.message}
                </div>
            )}
            <CreatePlayerButton/>
        </div>
    </form>
    )
}