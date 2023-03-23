navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

let lang = "kr"
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat, lon)
}

function onGeoError() {
    alert("날씨를 제공할 위치를 찾을 수 없습니다.")
}

function getWeather(lat, lon) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c2d0e5bbe716ac60f8541d884dda4c9c&lang=${lang}`,
        type: "GET",
        data: { units: "metric" }, // 섭씨로 변환
        success: function (data) {
            Info(data)// temp, weather
            menuInfo(data)
        },
        error: function (arg) {
            alert("통신실패시에만 실행");
        }
    });
}

function Info(data) {
    let now = 0
    let weatherGet = data.weather[0].description
    let tempUp = Math.ceil(data.main.temp * 10) / 10; // 반올림
    let temp = ''
    let weather = ''
    now++
    if(now <= tempUp){

    }

    temp += `<span>현재온도는 ${tempUp}°C</span>`
    weather += `<span>날씨는 '${weatherGet}'입니다</span>`
    $('.tempInfo').append(temp)
    $('.weatherInfo').append(weather)
}


let icon = document.querySelectorAll('.list')
let indi = document.querySelector('.indicator')


//현재 날씨 메뉴에 표시
function menuInfo(data) {
    let weatherIcon = data.weather[0].icon
    if (weatherIcon == '01d' || weatherIcon == '01n') {
        icon.forEach((i) =>
            i.classList.remove("active"))
        icon[0].classList.add("active")
    } else if (weatherIcon == '02d' || weatherIcon == '02n') {
        icon.forEach((i) =>
            i.classList.remove("active"))
        icon[1].classList.add("active")
    } else if (weatherIcon == '03d' || weatherIcon == '03n' || weatherIcon == '04d' || weatherIcon == '04n') {
        icon.forEach((i) =>
            i.classList.remove("active"))
        icon[2].classList.add("active")
    } else if (weatherIcon == '09d' || weatherIcon == '09n' || weatherIcon == '10d' || weatherIcon == '10n') {
        icon.forEach((i) =>
            i.classList.remove("active"))
        icon[3].classList.add("active")
    } else if (weatherIcon == '11d' || weatherIcon == '11n') {
        icon.forEach((i) =>
            i.classList.remove("active"))
        icon[4].classList.add("active")
    } else if (weatherIcon == '13d' || weatherIcon == '13n') {
        icon.forEach((i) =>
            i.classList.remove("active"))
        icon[5].classList.add("active")
    } else if (weatherIcon == '50d' || weatherIcon == '50n') {
        icon.forEach((i) =>
            i.classList.remove("active"))
        icon[6].classList.add("active")
    }
}


function menuAct(e) {
    icon.forEach((i) =>
        i.classList.remove("active"))
    this.classList.add("active")
    e.preventDefault();
}
icon.forEach((i) =>
    i.addEventListener('click', menuAct))
