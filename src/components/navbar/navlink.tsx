import Link from 'next/link';

interface NavItemProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
    return (
        <li>
            <Link className="text-[#CDCCCA]" href={href}>
                {children}
            </Link>
        </li>
    );
};

export default NavItem;