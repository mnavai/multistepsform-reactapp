
import SidebarLink from "../SidebarLink/SidebarLink"
const Sidebar = () => {
    return(
        <header className="nav-header">
            <nav className="side-nav">
                <ul>
                    <SidebarLink  step="STEP 1" text="YOUR INFO" />
                    <SidebarLink  step="STEP 2" text="SELECT PLAN" />
                    <SidebarLink  step="STEP 3" text="ADD-ONS" />
                    <SidebarLink  step="STEP 4" text="SUMMARY" />
                </ul>
            </nav>
        </header>
    );
}
export default Sidebar;