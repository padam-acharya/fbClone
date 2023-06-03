const userIconEl = document.querySelector('.nav-user-icon')
const settingsMenuEl = document.querySelector(".settings-menu")
const darkBtnEl = document.getElementById("dark-btn")

userIconEl.addEventListener("click", () => {
    settingsMenuEl.classList.toggle('settings-menu-height')
})

darkBtnEl.addEventListener("click", () => {
    darkBtnEl.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark")
    }
    else {
        localStorage.setItem("theme", "light")
    }
})

if (localStorage.getItem("theme") == "light") {
    darkBtnEl.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme")
}
else if (localStorage.getItem("theme") == "dark") {
    darkBtnEl.classList.add("dark-btn-on")
    document.body.classList.add("dark-theme")
}
else {
    localStorage.setItem("theme", "light")
}