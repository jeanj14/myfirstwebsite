const createFooter = () => {
    let footer = document.querySelector('footer')

    footer.innerHTML = `
        <div class="footer-content">
        <img src="img/3997648.png">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Stuff</li>
                <li><a href="" class="footer-link">Privacy Policy</a></li>
                <li><a href="" class="footer-link">Copyright</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
        <p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores harum distinctio cum assumenda itaque? Explicabo natus a, corporis fugiat itaque commodi odit ullam cumque quam temporibus voluptatum magnam voluptates architecto saepe quia dolorem molestiae suscipit amet facilis quis, vel ad dolorum laboriosam. Iure incidunt corrupti ut, velit sapiente placeat sit.
        </p>        
    `
}

createFooter()