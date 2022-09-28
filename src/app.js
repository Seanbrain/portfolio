const toggeleButton = document.getElementsByClassName ("toggle-button")[0]
const navbarLinks = document.getElementsByClassName ("navbar-links")[0]

toggeleButton.addEventListener("click", () => {

    toggeleButton.classList.toggle("active")

    navbarLinks.classList.toggle('active')
}
)
    document.getElementsByClassName("toggle-button").forEach((link => link.addEventListener("click",() =>{
        navbarLinks.classList.remove("active")
        
    
    }))
    )
    



