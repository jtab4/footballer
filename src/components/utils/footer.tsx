
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-white rounded-lg shadow dark:bg-[#546007] p-4">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex items-center justify-between">
                    
                        
                    <span className="text-sm font-semibold whitespace-nowrap dark:text-black">Footballer</span>
                    

                    
                    <button className="text-sm text-gray-500 dark:text-black cursor-pointer hover:underline">Log out</button>
                </div>

                <hr className="my-4 border-gray-200 dark:border-black" />

                
                <span className="block text-xs text-gray-500 dark:text-black mb-2 sm:text-center">© Jakub Taborski 2024</span>
            </div>
        </footer>
    );
};

export default Footer;
