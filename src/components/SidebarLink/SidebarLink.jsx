import './SidebarLink.css';
const SidebarLink = ({step, text, currentStep}) => {
    const isActive = step === currentStep;
    return(
            <li className="list-items" data-testid="sidebarlink">
                <div className={`circle-icon ${isActive ? 'active' : ''}`}>
                    <span>
                        {step}
                    </span>   
                </div>
                <div class="list-item-info">
                    <h5 className="nav-heading">STEP {step}</h5>
                    <p className="nav-p">{text}</p>
                </div>
            </li>
    );
}
export default SidebarLink;