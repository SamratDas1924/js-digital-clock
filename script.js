let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")


setInterval(function time() {
    let today = new Date ();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    if (hr < 10) {
        
        hr = '0' + hr;
    }

    if (min < 10) {

        min = '0' + min;
    }

    if (sec < 10) {

        sec = '0' + sec;
    }

    // hour.textContent = hr;
    // minute.textContent = min;
    // second.textContent = sec;

    hour.innerHTML = hr
    minute.innerHTML = min
    second.innerHTML = sec
}, 1000)