
const App = () => {
  return (
    <div className="App">
        <header class="nav-header">
            <nav class="side-nav">
                <ul>
                    <li class="list-items">
                        <div class="circle-icon active">
                            <span>
                                1
                            </span>   
                        </div>
                        <div class="list-item-info">
                            <h5 class="nav-heading">STEP 1</h5>
                            <p class="nav-p">YOUR INFO</p>
                        </div>
                    </li>
                    <li class="list-items">
                        <div class="circle-icon">
                            <span>
                                2
                            </span>  
                        </div>
                        <div class="list-item-info">
                            <h5 class="nav-heading">STEP 2</h5>
                            <p class="nav-p">SELECT PLAN</p>
                        </div>
                    </li>
                    <li class="list-items">
                        <div class="circle-icon">
                            <span>
                                3
                            </span>  
                        </div>
                        <div class="list-item-info">
                            <h5 class="nav-heading">STEP 3</h5>
                            <p class="nav-p">ADD-ONS</p>
                        </div>
                    </li>
                    <li class="list-items">
                        <div class="circle-icon">
                            <span>
                                4
                            </span>  
                        </div>
                        <div class="list-item-info">
                            <h5 class="nav-heading">STEP 4</h5>
                            <p class="nav-p">SUMMARY</p>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
        <main class="main-section">
            <hgroup class="form-hgroup">
                <h1 class="hgroup-heading">Personal Info</h1>
                <p class="hgroup-p">Please provide your name, email address, and phone number.</p>
            </hgroup>
            <form id="form" class="form-group">
                <div class="field-group">
                    <div class="labels-container">
                        <label class="form-label">Name</label>
                        <label class="error-text-name">This field is required</label> 
                    </div>
                    <input type="text" id="name" class="form-input" placeholder="e.g. Stephen King" />
                </div>
                <div class="field-group">
                    <div class="labels-container">
                        <label class="form-label">Email Address</label>
                        <label class="error-text-email">This field is required</label> 
                    </div>
                    <input type="email" id="email" class="form-input" placeholder="e.g. stephenking@lorem.com" />
                </div>
                <div class="field-group">
                    <div class="labels-container">
                        <label class="form-label">Phone</label>
                        <label class="error-text-phone">This field is required</label> 
                    </div>
                    <input class="form-input" type="number" id="phonenumber" placeholder="e.g. +1 999-999-9999" />
                </div>
                <input type="submit" value="Next Step" class="btn" />
            </form>
        </main>
    </div>
  );
};
export default App;
