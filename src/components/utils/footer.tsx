import React from 'react';
import { logout_user } from '@/actions/logoutAction';
import LogoutButton from '../auth/logoutbutton';
export default function Footer() {
    return (
        <footer style={{zIndex:1000}} className="fixed bottom-0 left-0 right-0 bg-white rounded-lg shadow dark:bg-[#546007] p-4">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold whitespace-nowrap dark:text-black">Footballer</span>
                    <form action={logout_user}>
                        <LogoutButton/>
                    </form>
                </div>
                <hr className="my-4 border-gray-200 dark:border-black" />
                <span className="block text-xs text-gray-500 dark:text-black mb-2 sm:text-center">© Jakub Taborski 2024</span>
            </div>
        </footer>
    );
}
