const createNav = () => {
    let nav = document.querySelector('.navbar')

    nav.innerHTML = `
 
    <div class="nav">
    <a href="index.html"><img src="img/3997648.png" class="brand-logo" alt=""></a>
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="...">
                <button class="search-btn">Search</button>
            </div>
            <a href="signup_signin_form.html"><img src="img/user.png"></a>
            <a href="cart.html"><img src="img/cart.png"></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Albums</a></li>
        <li class="link-item"><a href="#" class="link">Artists</a></li>
        <li class="link-item"><a href="#" class="link">Blog</a></li>
    </ul>
    `  
}

createNav();