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

function getWeather(lat, lon){
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c2d0e5bbe716ac60f8541d884dda4c9c&lang=${lang}`,
        type: "GET",
        data: {units:"metric"}, // 섭씨로 변환
        success: function (data) {
            Info(data)// temp, weather
        },
        error: function (arg) {
            alert("통신실패시에만 실행");
        }
    });
}

    function Info(data) {
    let weatherGet = data.weather[0].description
    let tempUp = Math.ceil(data.main.temp * 10) / 10; // 반올림
    let temp = ''
    let weather = ''
    let icon = ''

    if(weatherGet=='맑음'){
        icon += `<img src="./img/sun.png" alt="" style="width:25px; height:25px; position:absolute;">`
    }
    
    temp += `<span>현재온도는 ${tempUp}°C 입니다</span>`
    weather += `<span>현재 날씨는 ${weatherGet} ${icon} <br>입니다</span>`
    $('.tempInfo').append(temp)
    $('.weatherInfo').append(weather)
}