import type { NavItemProps } from "../nav-item/NavItem.type";

const sidebarMenuItems: NavItemProps[] = [
    {
        text: 'Your stay',
        href: '/',
        iconUrl: '/images/icon-bed.svg',
        newNotifications: 1
    },
    {
        text: 'The house',
        href: '/house',
        iconUrl: '/images/icon-house.svg'
    },
    {
        text: 'Around town',
        href: '/around-town',
        iconUrl: '/images/icon-pin.svg'
    },
    {
        text: 'Breakfast',
        href: '/breakfast',
        iconUrl: '/images/icon-breakfast-outline.svg'
    },
    {
        text: 'Messages',
        href: '/messages',
        iconUrl: '/images/icon-mail.svg'
    }
];

export default sidebarMenuItems;