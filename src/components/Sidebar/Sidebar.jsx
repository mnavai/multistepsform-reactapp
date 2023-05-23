const Sidebar = () => {
    return(
        <header className="nav-header">
            <nav className="side-nav">
                <ul>
                    <li className="list-items">
                        <div className="circle-icon active">
                            <span>
                                1
                            </span>   
                        </div>
                        <div class="list-item-info">
                            <h5 className="nav-heading">STEP 1</h5>
                            <p className="nav-p">YOUR INFO</p>
                        </div>
                    </li>
                    <li class="list-items">
                        <div className="circle-icon">
                            <span>
                                2
                            </span>  
                        </div>
                        <div className="list-item-info">
                            <h5 className="nav-heading">STEP 2</h5>
                            <p className="nav-p">SELECT PLAN</p>
                        </div>
                    </li>
                    <li className="list-items">
                        <div className="circle-icon">
                            <span>
                                3
                            </span>  
                        </div>
                        <div className="list-item-info">
                            <h5 className="nav-heading">STEP 3</h5>
                            <p className="nav-p">ADD-ONS</p>
                        </div>
                    </li>
                    <li className="list-items">
                        <div className="circle-icon">
                            <span>
                                4
                            </span>  
                        </div>
                        <div className="list-item-info">
                            <h5 className="nav-heading">STEP 4</h5>
                            <p className="nav-p">SUMMARY</p>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Sidebar;