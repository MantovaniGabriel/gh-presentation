window.addEventListener("scroll", function(){
    var header = document.querySelector("header")

    header.classList.toggle("sticky", window.scrollY > 0)
})

function toContact(){
    window.scrollTo(0, 6000);
}

function openGit(){
    window.open("https://github.com/MantovaniGabriel")
}

function openLinke(){
    window.open("https://www.linkedin.com/in/gabriel-henrique-a50ab1231")
}