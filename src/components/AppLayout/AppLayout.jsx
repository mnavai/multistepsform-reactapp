import "./AppLayout.css"

const AppLayout = ({children}) => {
    return(
        <div className="app-layput">
            {children}
        </div>
    );
}

export default AppLayout;