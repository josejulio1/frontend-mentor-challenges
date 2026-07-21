import { Link, useLocation } from "react-router";
import type { NavItemProps } from "./NavItem.type";
import './NavItem.css';

function NavItem({ text, href, iconUrl, newNotifications }: NavItemProps) {
    const { pathname } = useLocation();
    const isSelected = pathname === href;

    return (
        <Link
            to={href}
            className={`nav-item ${isSelected ? 'nav-item--selected' : ''}`}
        >
            <article className="nav-item__details">
                <img src={iconUrl} alt={`Navigate to ${text}`} />
                <span>{text}</span>
            </article>
            {
                newNotifications && <span className="nav-item__notifications">{newNotifications}</span>
            }
        </Link>
    );
}

export default NavItem;