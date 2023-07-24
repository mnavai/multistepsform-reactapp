import './MainWrapper.css';
const MainWrapper = ({children}) => {
    return(
        <main className="main-section" data-testid="main-section">
            {children}
        </main>
    );
}
export default MainWrapper;