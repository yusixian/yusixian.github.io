function setNowTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    h = (h>=10)?h:'0'+h;
    m = (m>=10)?m:'0'+m;
    s = (s>=10)?s:'0'+s;
    let dc = document.getElementById('digital-clock');
    dc.innerHTML = `${h}:${m}:${s}`;
    console.log(`${h}:${m}:${s}`);
}
// var interval = setInterval(setNowTime(),0)
// setNowTime()