
import SidebarLink from "../SidebarLink/SidebarLink";
import "./Sidebar.css";
const Sidebar = () => {
    return(
        <header className="nav-header">
            <nav className="side-nav">
                <ul>
                    <SidebarLink  step="1" text="YOUR INFO" />
                    <SidebarLink  step="2" text="SELECT PLAN" />
                    <SidebarLink  step="3" text="ADD-ONS" />
                    <SidebarLink  step="4" text="SUMMARY" />
                </ul>
            </nav>
        </header>
    );
}
export default Sidebar;