import { Outlet } from "react-router";
import SidebarMenu from "../../components/sidebar-menu/SidebarMenu";
import './AppLayout.css';

function AppLayout() {
    return (
        <div className="layout">
            <SidebarMenu />
            <Outlet />
        </div>
    );
}

export default AppLayout;