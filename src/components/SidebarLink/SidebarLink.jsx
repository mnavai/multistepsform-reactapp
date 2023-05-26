const SidebarLink = ({step, text}) => {
    return(
            <li className="list-items">
                <div className="circle-icon active">
                    <span>
                        {step}
                    </span>   
                </div>
                <div class="list-item-info">
                    <h5 className="nav-heading">STEP{step}</h5>
                    <p className="nav-p">{text}</p>
                </div>
            </li>
          );
}
export default SidebarLink;