const date = document.getElementById("date")
let today = new Date()
let day = String(today.getDate()).padStart(1, "")
let months = String(today.getMonth() + 1).padStart(7, "")
let year = today.getFullYear()
today = months + "/" + day + "/" + year
date.innerText = today