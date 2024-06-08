// Counter
function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 0.01 : -0.01;
    let step = Math.abs(Math.floor(duration / (range * 100)));
    if (range === 0) {
        obj.textContent = end;
        return;
    }
    let timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            clearInterval(timer);
            obj.textContent = end.toFixed(2);
        } else {
            obj.textContent = current.toFixed(2);
        }
    }, step);
}

window.onload = function() {
    counter("count1", 0, 3.2, 1000);
    counter("count2", 0, 1, 1000);
    counter("count3", 0, 24, 1000);
    document.getElementById("count4").textContent = 0;
};

// Mobile Number country code
$("#mobile_code").intlTelInput({
    initialCountry: "in",
    separateDialCode: true
});