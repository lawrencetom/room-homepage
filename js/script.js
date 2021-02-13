const header = document.querySelector("#header")

header.addEventListener("click", function() {
    console.log("click Hamburger")

    if (header.classList.contains("open")) {
        header.classList.remove("open")
    }
    else {
        header.classList.add("open")
    }
})