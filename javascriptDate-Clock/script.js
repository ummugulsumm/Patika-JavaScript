
let userName = prompt("Lütfen adınızı giriniz: ");
let nameDOM = document.querySelector("#myName");



nameDOM.innerHTML = userName;

function time() {

    const date = new Date

    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    hour = ("0" + hour ).slice(-2)
    minute = ("0" + minute).slice(-2)
    second = ("0" + second).slice(-2)


    let dayNumber = date.getDate()
    let year = date.getFullYear()

    let months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
    let month = months[date.getMonth()]

    let days = ["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma","Cumartesi"];
    let day = days[date.getDay()];

    dayNumber = ("0" + dayNumber).slice(-2)

    let clockDOM = document.querySelector("#myClock");
    let dateDOM = document.querySelector("#myDate")
    let time = `${hour}:${minute}:${second} ${day}`
    console.log(time)
    dateDOM.innerHTML = `<strong>Tarih:</strong> ${dayNumber} ${month} ${year}`
    clockDOM.innerHTML =  `<strong>Saat:</strong> ${hour}:${minute}:${second}`;

}

setInterval(time, 1000)

