// https://exquisite-tarsier-8c020e.netlify.app/pages/sheet/component.html

document.getElementById("login-btn").addEventListener("click", function () {
    const mail = getValueById('input-mail');
    const pass = getValueById('input-password');
    if (mail === "teacher" && pass === "CMT") {
        window.location.href = "http://127.0.0.1:5500/pages/home/home.html"
    }
    else {
        alert('password wrong')
    }
})
