const Card = () => {
    return(
        <div class="card-group">
            <div class="card">
                <div class="icon">
                    <img src="assets/images/icon-arcade.svg" alt="arcade icon"/>
                </div>
                <div class="text-group">
                    <h5 class="card-label-text">Arcade</h5>
                    <p class="card-text">$9/mon</p>
                </div>
            </div>
            <div class="card">
                <div class="icon">
                    <img src="assets/images/icon-advanced.svg" alt="advanced icon"/>
                </div>
                <div class="text-group">
                    <h5 class="card-label-text">Advanced</h5>
                    <p class="card-text">$12/mon</p>
                </div>
            </div>
            <div class="card">
                <div class="icon">
                    <img src="assets/images/icon-pro.svg" alt="pro icon"/>
                </div>
                <div class="text-group">
                    <h5 class="card-label-text">Pro</h5>
                    <p class="card-text">$15/mon</p>
                </div>
            </div>
         </div>
    );
}
export default Card;