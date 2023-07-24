import "./AppLayout.css"

const AppLayout = ({children}) => {
    return(
        <div className="app-layout" data-testid="app-layout">
            {children}
        </div>
    );
}

export default AppLayout;