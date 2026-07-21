import { useState } from "react";
import useIsMobile from "../../hooks/use-is-mobile";
import sidebarMenuItems from "./SidebarMenu.data";
import NavItem from "../nav-item/NavItem";
import './SidebarMenu.css';

const actualYear = new Date().getFullYear();

function SidebarMenu() {
    const { isMobile } = useIsMobile();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(isMobile);

    return (
        <aside className="sidebar">
            <article className="sidebar__header">
                <img src="/images/logo.svg" alt="Logo" />
                {
                    isMobile && (
                        <button
                            className="header__button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {
                                isMobileMenuOpen
                                    ? <img src="/images/icon-close.svg" alt="Close menu" />
                                    : <img src="/images/icon-menu.svg" alt="Open menu" />
                            }
                        </button>
                    )
                }
            </article>
            <hr className="separator" />
            {
                (!isMobile || (isMobile && isMobileMenuOpen)) && (
                    <>
                        <article className="sidebar__details">
                            <nav className="nav">
                                {
                                    sidebarMenuItems.map(sidebarMenuItem => (
                                        <NavItem
                                            key={sidebarMenuItem.href}
                                            {...sidebarMenuItem}
                                        />
                                    ))
                                }
                            </nav>
                            <article className="temperature-card">
                                <img src="/images/icon-weather.svg" alt="Temperature today" />
                                <p className="temperature-card__title">Today in Cassis</p>
                                <span className="temperature-card__degrees">27º</span>
                                <p className="temperature-card__info">Sunny • light breeze</p>
                            </article>
                        </article>
                        <hr className="separator separator-dashed" />
                        <article className="address">
                            <address>EST. 1987</address>
                            <address>MAISON SOLEIL • 12 RUE DES OLIVIERS • CASSIS</address>
                            <p>© {actualYear} Maison Soleil</p>
                        </article>
                    </>
                )
            }
        </aside>
    );
}

export default SidebarMenu;