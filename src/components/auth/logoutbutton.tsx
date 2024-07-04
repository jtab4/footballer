'use client'

const handleLogout = (e:any) => {
    e.preventDefault()
    console.log("click")
}
export default function LogoutButton() {
    return (
        
        <button type="submit" onClick={handleLogout} className="text-sm text-gray-500 dark:text-black cursor-pointer hover:underline">Log out</button>
        
    )
}